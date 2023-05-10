import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { GB_CURRENCY } from "../utils/Constant";
import { RemoveFromCart } from "../Redux/cartSlice";

function CheckOut() {
  const products = useSelector((state) => state.cart.products);
  const itemNumber = useSelector((state) => state.cart.productsNumber);
  const subTotal = products.reduce(
    (subtotal, product) => (subtotal += product.quantity * product.price),
    0
  );
  const dispatch = useDispatch();

  return (
    <div className=" h-screen bg-amazonclone-background">
      <div className=" min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8  gap-10">
          {/* product */}
          <div className="col-span-6 bg-white">
            <div className=" text-2xl xl:text-3xl font-bold m-4 ">
              Shopping Cart
            </div>
            {products.map((product) => (
              <div key={product.id}>
                <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                  <div className=" col-span-10 grid grid-cols-8 divide-y mt-2 divide-gray-400">
                    <div className=" col-span-2">
                      <Link to={`/product/${product.id}`}>
                        <img
                          className="p-4 m-auto"
                          src={product.image_small}
                        ></img>
                      </Link>
                    </div>
                    <div className=" col-span-6">
                      <div className=" font-medium text-black ">
                        <Link to={`/product/${product.id}`}>
                          <ProductDetail product={product} ratings={false} />
                        </Link>
                        <div>
                          <button
                            onClick={() => dispatch(RemoveFromCart(product.id))}
                            className="text-sm xl:text-base rounded font-semibold mt-2  text-blue-500"
                          >
                            Delete
                          </button>
                        </div>
                        <div className="mt-1 grid grid-cols-3 w-20 text-center">
                          <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                            +
                          </div>
                          <div className="text-lg xl:text-xl bg-gray-200">
                            {product.quantity}
                          </div>
                          <div className="text-xl xl:text-2xl bg-gray-400 rounded">
                            -
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-span-2 text-lg xl:text-xl font-semibold mt-2 mr-4">
                    {GB_CURRENCY.format(product.price)}
                  </div>
                </div>
              </div>
            ))}
            <div className=" text-lg xl:text-xl text-right mb-4 mr-4">
              Subtotal ({itemNumber} items):{" "}
              <span className=" font-semibold">
                {GB_CURRENCY.format(subTotal)}
              </span>
            </div>
          </div>

          <div className=" col-span-2 bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2 ">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className=" text-base xl:text-lg  mb-4 ">
              Subtotal ({itemNumber} items):{" "}
              <span className=" font-semibold">
                {GB_CURRENCY.format(subTotal)}
              </span>
            </div>
            <button className="btn">Procceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
