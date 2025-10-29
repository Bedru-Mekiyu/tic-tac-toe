import { useState } from "react";

function Square({ value, onSquareClick, highlight }) {
  return (
    <button
      onClick={onSquareClick}
      className={`w-20 h-20 text-3xl font-bold border border-gray-400 
      flex items-center justify-center transition-all duration-200
      ${highlight ? "bg-yellow-300 scale-105" : "bg-white hover:bg-gray-100"}
      `}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningLine = winnerInfo ? winnerInfo.line : [];

  function handleClick(i) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares, i);
  }

  let status;
  if (winner) {
    status = `🏆 Winner: ${winner}`;
  } else if (!squares.includes(null)) {
    status = "🤝 It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? "❌ X" : "⭕ O"}`;
  }

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="text-xl font-semibold text-gray-700">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onSquareClick={() => handleClick(i)}
            highlight={winningLine.includes(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), location: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, i) {
    const row = Math.floor(i / 3) + 1;
    const col = (i % 3) + 1;
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location: `(${row}, ${col})` },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((step, move) => {
    if (move === currentMove) {
      return (
        <li key={move} className="text-blue-600 font-semibold">
          You are at move #{move}
        </li>
      );
    }

    const description =
      move > 0 ? `Go to move #${move} ${step.location}` : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="text-sm bg-gray-200 hover:bg-gray-300 rounded px-2 py-1"
        >
          {description}
        </button>
      </li>
    );
  });

  const sortedMoves = isAscending ? moves : [...moves].reverse();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">
        🎯 Tic-Tac-Toe
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 w-60">
          <button
            onClick={() => setIsAscending(!isAscending)}
            className="mb-3 w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600"
          >
            Sort {isAscending ? "Descending" : "Ascending"}
          </button>
          <ol className="space-y-2 text-gray-700">{sortedMoves}</ol>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
