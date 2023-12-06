import axios from "axios";
import { useEffect, useState } from "react";
const ApiUrl = "https://dummyjson.com/products";

function Api() {
  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    axios
      .get(ApiUrl)
      .then((response) => setProduct(response.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        {product.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </div>
    </>
  );
}

export default Api;
