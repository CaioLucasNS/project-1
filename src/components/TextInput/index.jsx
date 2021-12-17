import './styles.css';

export const TextInput = ({ inputValue, actionFn }) => (
    <>
        <input
            className="text-input"
            type="search"
            onChange={actionFn}
            value={inputValue}
            placeholder="Type your search"
        />
        <span>🔎</span>
    </>
)