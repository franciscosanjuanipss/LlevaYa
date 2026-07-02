import Image from "../Image/Image"
import Button from "../Button/Button"
import "./Card.css";

function Card(props) {
    return (
        <div id="card">
            <Image clase="image" imageURL={props.imageURL}></Image>
            {props.isEnvioGratisApp === true &&
                (<div className="tip">
                    <p>Envío gratis app</p>
                </div>)
            }
            <div>
                <h3>{props.texto}</h3>
            </div>
            <div>
                <span>{props.categoria}</span>
            </div>
            <div>
                <span>{props.descripcion}</span>
            </div>
            <div>
                <Button titulo="Comprar"></Button>
                <Button titulo="Ver Producto"></Button>
            </div>
        </div>
    )
}

export default Card;