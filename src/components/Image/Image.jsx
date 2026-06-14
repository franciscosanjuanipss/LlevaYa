import './Image.css';

function Image(props) {
    return (
        <div>
            <div>
                <img id="image" src={props.imageURL}></img>
                {props.isEnvioGratisApp === true &&
                    (<div className="tip">
                        <p>Envío gratis app</p>
                    </div>)
                }
                {props.precio}
            </div>
        </div>
    )
}

export default Image;