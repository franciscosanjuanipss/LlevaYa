import './Input.css';

function Input(props){
    return(
        <div>
            <input type="text" placeholder={props.placeholder} value={props.buscar} onChange={props.cambios}/>
        </div>
    )
}

export default Input;