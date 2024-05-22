// src/App.test.js
import { render, screen } from '@testing-library/react';
import { act } from 'react'; // לא מ-`react-dom/test-utils`
 // ייבוא act מ-react
import App from './components/App';
import i18n from './i18n'; // ייבוא קובץ ה-i18n

beforeAll(async () => {
  await i18n.init(); // הבטחה שה-i18n נטען לפני הרצת המבחנים
});

test('renders toolbar buttons', async () => {
  await act(async () => {
    render(<App />);
  });
  const boldButton = await screen.findByText(/Bold/i);
  const italicButton = await screen.findByText(/Italic/i);
  const redButton = await screen.findByText(/Red/i);

  expect(boldButton).toBeInTheDocument();
  expect(italicButton).toBeInTheDocument();
  expect(redButton).toBeInTheDocument();
});

test('renders keyboard buttons', async () => {
  await act(async () => {
    render(<App />);
  });
  const keyButtons = await screen.findAllByText(/A/i);
  expect(keyButtons.length).toBeGreaterThan(0);
});

test('renders language switcher buttons', async () => {
  await act(async () => {
    render(<App />);
  });
  const languageButtons = await screen.findAllByText(/English/i);
  const englishButton = languageButtons.find(button => button.closest('.language-switcher'));
  const hebrewButton = await screen.findByText(/עברית/i);

  expect(englishButton).toBeInTheDocument();
  expect(hebrewButton).toBeInTheDocument();
});

test('renders emoji picker button', async () => {
  await act(async () => {
    render(<App />);
  });
  const showEmojisButton = await screen.findByText(/Show Emojis/i);

  expect(showEmojisButton).toBeInTheDocument();
});
