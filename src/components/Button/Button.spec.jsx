import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', () => {
    // testando se o botão tem o texto "load more"
    it('should render the button with the text "Load more"', () => {
        // test here
        render(<Button text="Load more" />); // renderiza o componente

        // screen.query - n levanta um erro se não achar o elemento
        // screen.get - quando eu sei que aquele elemento deve estar na tela
        const button = screen.getByRole('button', { name: /load more/i });
        
        expect.assertions(1)
        expect(button).toBeInTheDocument();
    });

    // testando se o click chama uma função 1x
    it('should call function on button click', () => {
        // mock - o jest entrega uma função mockada
        const fn = jest.fn();

        render(<Button text="Load more" onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });
        // fireEvent.click(button); // clicando no botão
        // fireEvent.click(button); // clicando no botão
        userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1); // verificando se a função foi chamada 1x
    });

    // testando quando o botão estiver disabled
    it('should be disabled when disabled is true', () => {
        render(<Button text="Load more" disabled={true} />);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeDisabled();
    });
    
    // testando quando o botão estiver enabled
    it('should be enabled when disabled is false', () => {
        render(<Button text="Load more" disabled={false} />);
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeEnabled();
    });
});