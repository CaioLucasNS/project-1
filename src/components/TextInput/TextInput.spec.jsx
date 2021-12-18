import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { TextInput } from "."

describe('<TextInput />', () => {
    it('shoud have a value of searchValue', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={'testando'} />);
        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input.value).toBe('testando');
    });

    it('shoud call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        const typedValue = 'typed value';

        userEvent.type(input, typedValue);

        // espero que no value do input seja = ao valor digitado (typedValue);
        expect(input.value).toBe(typedValue);

        // espero que a função seja chamada a qtd de vezes q digitei no input (typedValue);
        expect(fn).toHaveBeenCalledTimes(typedValue.length);     
    });

    // snapshot
    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<TextInput handleChange={fn} />);
        expect(container).toMatchSnapshot();
    });
});