import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CallAPI } from "../utils/CallApi";
import ProductDetail from "./ProductDetail";
import { GB_CURRENCY } from "../utils/Constant";

function SerachResult() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerms");
    const category = searchParams.get("category");

    CallAPI("data/search.json").then((searchResults) => {
      if (searchTerm) {
        let filterSearchResult = searchResults[category].filter((item) => {
          return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setProduct(filterSearchResult);
      } else {
        setProduct(searchResults[category]);
      }
    });
  };

  useEffect(() => getSearchResults(), [searchParams]);
  return (
    <div className=" min-w-[1200px] max-w-[1300px] m-auto">
      {product &&
        product.map((item, key) => (
          <Link key={key} to={`/product/${item.id}`}>
            <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1">
              <div className=" col-span-2 p-4 bg-gray-300">
                <img className="m-auto" src={item.image_small}></img>
              </div>
              <div className=" col-span-10 bg-gray-100 border border-gray-100 hover:bg-gray-200">
                <div className=" font-medium text-black p-2">
                  <ProductDetail product={item} ratings={true} />
                  <div className=" text-xl xl:text-2xl pt-1">
                    {GB_CURRENCY.format(item.price)}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default SerachResult;
