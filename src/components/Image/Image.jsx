import './Image.css';

function Image(props) {
    return (
        <div>
            <div>
                <img id="image" src={props.imageURL}></img>
            </div>
        </div>
    )
}

export default Image;