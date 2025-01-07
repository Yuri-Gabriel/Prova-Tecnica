"use client"

import Form from "@/app/components/form";

import { useState  } from "react";
import List from "@/app/components/list"

interface Product {
  title: string,
  description: string,
  price: number,
  isSale: boolean
}

export default function Home() {

  const [ registerProduct, setRegisterProduct ] = useState<boolean>(false);
  const [ productList, setProductList ] = useState<Product[]>([]);

  return (
    <main>
      <List 
        registerProduct={registerProduct} 
        setRegisterProduct={setRegisterProduct}
      />
      {
        registerProduct && <Form />
      }
    </main>
  );
}
