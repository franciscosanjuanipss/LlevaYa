import Image from "../Image/Image"

function Card (props){
    return (
        <div id="card">
            <Image imageURL={props.imageURL} isEnvioGratisApp={props.isEnvioGratisApp} precio={props.precio}></Image>
            <p>{props.texto}</p>
        </div>
    )
}

export default Card;