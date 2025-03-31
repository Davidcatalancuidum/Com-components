import '../index.css';

const possibleColors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'];

interface Props {
    selectedColor: string;
    onColorChange: (color: string) => void;
}

export const ColorSelector: React.FC<Props> = ({ selectedColor, onColorChange }) => {
    return (
        <select value={selectedColor} onChange={(e) => onColorChange(e.target.value)}>
            {possibleColors.map(color => (
                <option key={color} value={color}>
                    {color}
                </option>
            ))}
        </select>
    );
};