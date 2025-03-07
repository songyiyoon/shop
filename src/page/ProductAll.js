import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

function ProductAll() {
  const [productList, setProductList] = useState([]);
  let [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    const searchQuery=query.get("q") || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/songyiyoon/shop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
 
    setProductList(data);
  };
  //useEffect(()=>{},[]) //[]이 비어있으면 component가 실행될때 한번만 실행
  //useEffect(()=>{},[변수]) //[배열에]변수가 있으면 component가 실행될때 한번 실행하고 변수값이 바뀔때마다 함수가 실행
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="cards">
        {productList.map((menu) => {
          return <ProductCard key={menu.id} item={menu} />;
        })}
      </div>
    </div>
  );
}

export default ProductAll;
