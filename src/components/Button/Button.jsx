import './Button.css';

function Button(props) {
    return (<button
        type="button"
        id='button'>
            { props.titulo }

    </button>)
}

export default Button;