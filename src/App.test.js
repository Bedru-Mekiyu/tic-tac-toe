import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Tic-Tac-Toe game title and initial board state', () => {
  render(<App />);

  // Verify heading title
  const titleElement = screen.getByRole('heading', { name: /Tic-Tac-Toe/i });
  expect(titleElement).toBeInTheDocument();

  // Verify initial player status
  const statusElement = screen.getByText(/Next player: ❌ X/i);
  expect(statusElement).toBeInTheDocument();

  // Verify move history label
  const moveElement = screen.getByText(/You are at move #0/i);
  expect(moveElement).toBeInTheDocument();
});

test('allows playing a turn and updates the board and history', () => {
  render(<App />);

  const buttons = screen.getAllByRole('button');
  // First 9 buttons are the board squares
  fireEvent.click(buttons[0]);

  // Next player status should update to O
  expect(screen.getByText(/Next player: ⭕ O/i)).toBeInTheDocument();

  // Move 1 should appear in history
  expect(screen.getByText(/You are at move #1/i)).toBeInTheDocument();
  expect(screen.getByText(/Go to game start/i)).toBeInTheDocument();
});
