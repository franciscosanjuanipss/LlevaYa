import './Image.css';

function Image(props) {
    return (
        <div>
            <div>
                <img id={props.clase} src={props.imageURL}></img>
            </div>
        </div>
    )
}

export default Image;