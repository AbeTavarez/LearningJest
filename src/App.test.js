import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('checks for title', () => {
  const div = document.createElement('div');
  render(<App/>, div);
  expect(div.innerHTML).toMatch('Hi there!')
  ReactDOM.unmountComponentAtNode(div);
})
