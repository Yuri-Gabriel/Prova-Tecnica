"use client"

import Form from "@/app/components/form";

import { useState  } from "react";
import List from "@/app/components/list"

import {
  Product
} from "./types";

export default function Home() {

  const [ registerProduct, setRegisterProduct ] = useState<boolean>(false);
  const [ productList, setProductList ] = useState<Product[]>([{
    title: "teste1",
    description: "testeghgggggggggggggggg",
    price: 2,
    isSale: false
  },
  {
    title: "teste2",
    description: "teste",
    price: 2,
    isSale: false
  },
  {
    title: "teste3",
    description: "teste",
    price: 2,
    isSale: false
  }]);

  return (
    <main>
      <List 
        registerProduct={registerProduct} 
        setRegisterProduct={setRegisterProduct}

        productList={productList}
        setProductList={setProductList}
      />
      {
        registerProduct && <Form 
          registerProduct={registerProduct} 
          setRegisterProduct={setRegisterProduct}

          productList={productList}
          setProductList={setProductList}
        />
      }
    </main>
  );
}
