import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Input from "../Input/Input";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products)
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const filtered = products.filter((p) => p.title.toLowerCase().includes(search.toLocaleLowerCase()))

    if (loading) return <p>Cargando Productos</p>
    if (error) return <p>Hubo un error {error}</p>

    return (
        <>
            <Input placeholder="Buscar productos..." buscar={search} cambios={(e) => setSearch(e.target.buscar)}></Input>
            <div>
                {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default ProductList;