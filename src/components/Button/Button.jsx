import './Button.css';

function Button(props) {
    return (<button
        type="button"
        className={props}>
            { props.titulo }

    </button>)
}

export default Button;