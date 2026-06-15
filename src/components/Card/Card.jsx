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
            <p>{props.texto}</p>
            <p>{props.precio}</p>
            <Button titulo="Comprar"></Button>
            <Button titulo="Ver Producto"></Button>
        </div>
    )
}

export default Card;