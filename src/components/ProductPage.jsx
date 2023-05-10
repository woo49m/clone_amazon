import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CallAPI } from "../utils/CallApi";
import { GB_CURRENCY } from "../utils/Constant";
import ProductDetail from "./ProductDetail";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  function getProduct() {
    CallAPI("./data/products.json").then((productResult) =>
      setProduct(productResult[id])
    );
  }

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product?.title) {
    return <div>Data is Loading...</div>;
  }

  return (
    product && (
      <div className=" h-screen bg-amazonclone-background">
        <div className=" min-w-[1000px] max-w-[1500px] bg-amazonclone-background m-auto p-4">
          <div className="grid grid-cols-10 gap-2">
            {/*left*/}
            <div className=" col-span-3 p-8 rounded bg-white m-auto">
              <img src={product.image}></img>
            </div>
            {/*middle*/}
            <div className=" col-span-5  p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetail product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-xl mt-3 font-semibold">
                {product.description}
              </div>
            </div>
            {/*right*/}
            <div className=" col-span-2 p-4 rounded bg-white">
              <div className="text-xl text-red-700 text-right xl:text-2xl font-semibold">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className=" text-base text-gray-500 text-right xl:text-lg font-semibold">
                RRP:{" "}
                <span className=" line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className=" text-sm xl:text-base text-blue-500 font-semibold mt-3">
                FREE Returns
              </div>
              <div className=" text-sm xl:text-base text-blue-500 font-semibold mt-1">
                FREE Delivery
              </div>
              <div className=" text-base xl:text-lg text-green-700 font-semibold mt-1">
                In Stock
              </div>
              <div className=" text-base xl:text-lg mt-1">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className=" m-2 p-1 bg-white border rounded-sm hover:border-indigo-500"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="mt-3 bg-yellow-400 h-[30px] w-full text-xs xl:text-sm rounded hover:bg-yellow-500"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductPage;
