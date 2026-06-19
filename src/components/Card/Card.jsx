import Image from "../Image/Image"
import Button from "../Button/Button"
import "./Card.css";

function Card(props) {
    return (
        <div id="card">
            <Image imageURL={props.imageURL}></Image>
            {props.isEnvioGratisApp === true &&
                (<div className="tip">
                    <p>Envío gratis app</p>
                </div>)
            }
            <div>
                <p>{props.texto}</p>
            </div>
            <div>
                <p>{props.precio}</p>
            </div>
            <div>
                <Button titulo="Comprar"></Button>
                <Button titulo="Ver Producto"></Button>
            </div>
        </div>
    )
}

export default Card;