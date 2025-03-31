import '../index.css';

const possibleColor = ['RED','BLUE','YELLOW','GREEN']

interface Prop {
    selectedColor: string;
    onColorChange: ( color: string ) => void;
}

export const ColorSelector:Fc<Prop> = ({ selectedColor, onColorChange }) => {
    return(
        <div style={{display: 'flex'}}>
            {
                possibleColor.map( color => (
                    <button 
                        key={ color } 
                        className={ selectedColor === color ? 'active' : '' }
                        onClick={ () => onColorChange( color ) }
                    >
                        { color }
                    </button>
                 ))
            }
        </div>
    )
}