"use client"

import Form from "@/app/components/form";

import { useState  } from "react";
import List from "@/app/components/list"

import {
  Product
} from "./types";

export default function Home() {

  const [ registerProduct, setRegisterProduct ] = useState<boolean>(false);
  const [ productList, setProductList ] = useState<Product[]>([]);

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
