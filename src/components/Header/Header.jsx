import "./Header.css";
import Image from "../Image/Image"
import logo from "../../assets/imagenes/Logo_LleveYa.jpg"

function Header (){
    return (
        <div id="header">
            <Image id="logo" imageURL={logo}></Image>
            <h1>LlevaYa</h1>
            <h5>Tu mejor pagina para compras online</h5>
        </div>
    )
}

export default Header;