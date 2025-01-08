export interface Product {
  title: string,
  description: string,
  price: number,
  isSale: boolean
}

export interface ListState {
    setRegisterProduct: (value: boolean) => void
}

export interface ListProps {
    registerProduct: boolean
    setRegisterProduct: (value: boolean) => void
    productList: Product[]
    setProductList: (product: Product[]) => void
}

export interface Product {
    title: string,
    description: string,
    price: number,
    isSale: boolean
}

export interface Product {
    title: string,
    description: string,
    price: number,
    isSale: boolean
}

export interface FormProps { 
    registerProduct: boolean
    setRegisterProduct: (value: boolean) => void
    productList: Product[]
    setProductList: (product: Product[]) => void
}

export interface FormState {
    title: string,
    description: string,
    price: number,
    isSale: boolean
}

