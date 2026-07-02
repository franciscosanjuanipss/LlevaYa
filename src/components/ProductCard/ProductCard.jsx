import Image from "../Image/Image";
import Card from "../Card/Card";

function ProductCard({ product }) {
    return (
        <>
            <Card isEnvioGratisApp={false} texto={product.title} imageURL={product.thumbnail} categoria={product.category} descripcion={product.description}></Card>
        </>
    )
}

export default ProductCard;