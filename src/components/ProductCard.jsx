import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const { product } = props;

    console.log(props)
    return (
        <Link to={`/productInfo/${product.productId}`}>



<div className="w-[300px] h-[450px]  m-[40px] rounded-xl shadow-lg shadow-gray-500
hover:shadow-primary hover:border -[3px] overflow-hidden flex flex-col">



<img src={props.product.images[0]} className="h-[70%] w-full object-cover " />
<div className="  flex flex-col justify-between">
<h1 className="text-2xl font-bold text-center text-accent">{props.product.productName}</h1>

<h2 className="text-lg text-gray-500 text-center">{props.product.productId}</h2>
<p className="text-left text-lg font-semibold">LKR.{props.product.lastPrice.toFixed(2)}</p>

{

(props.product.lastPrice<props.product.price) &&

<p className="text-left text-lg text-gray-600 line-through">LKR.{props.product.price.toFixed(2)}</p>

}

</div>


</div>




            {/* <div className="flex flex-col items-center">
                <img src={product.img} alt={product.name} className="h-40 w-40 object-cover" />
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div> */}
        </Link>
    );
}