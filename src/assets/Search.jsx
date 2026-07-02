import './Search.css';

function Search(props){
    return(
        <div>
            <input type="text" placeholder={props.placeholder} value={props.buscar} onChange={props.cambios}/>
        </div>
    )
}

export default Search;