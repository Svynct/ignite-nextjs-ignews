import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { Async } from ".";

// findBy... => espera os elementos carregados assincronamente aparecerem em tela
// getBy... => não espera os elementos carregados assincronamente

it('renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello World')).toBeInTheDocument();

  await waitForElementToBeRemoved(screen.queryByText('Button'));
})