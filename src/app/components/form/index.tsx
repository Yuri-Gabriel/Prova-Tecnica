/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from "react";

import {
    FormContainer,
    FormBody,
    InputContainer,
    InputValue,
    LabelInput,
    ButtonSubmit
} from './style';

interface Product {
    title: string,
    description: string,
    price: number,
    isSale: boolean
}

interface FormProps { }

interface FormState {
    products: Product[]

    title: string,
    description: string,
    price: number,
    isSale: boolean
}

export default class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props)
        this.state = {
            products: [],
            title: "",
            description: "",
            price: 0,
            isSale: false
        }
    }

    private addProduct() {
        if(this.state.title == "" || this.state.description == "") {
            alert("Ausencia de dados");
            return;
        }

        const currentProductList: Product[] = this.state.products;
        currentProductList.push({
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            isSale: this.state.isSale
        });
        this.setState({
            products: currentProductList
        })
        console.log(this.state.products)
    }

    render(): React.ReactNode {
        return (
            <FormContainer>
                <FormBody>
                    <InputContainer>
                        <LabelInput>Titulo</LabelInput>
                        <InputValue 
                            type="text"
                            required
                            value={this.state.title}
                            onChange={(event) => {
                                const value: string= event.target.value
                                this.setState({
                                    title: value
                                })
                            }}
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelInput>Descrição</LabelInput>
                        <InputValue 
                            type="text"
                            required
                            value={this.state.description}
                            onChange={(event) => {
                                const value: string= event.target.value
                                this.setState({
                                    description: value
                                })
                            }}
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelInput>Preço</LabelInput>
                        <InputValue 
                            type="number"
                            required
                            value={this.state.price}
                            onChange={(event) => {
                                const value: number = Number(event.target.value)
                                this.setState({
                                    price: value
                                })
                            }}
                        />
                    </InputContainer>
                    <InputContainer style={{
                        flexDirection: "row"
                    }}>
                        <LabelInput>Está a venda?</LabelInput>
                        <div>
                            <LabelInput>
                                Sim
                            </LabelInput>
                            <InputValue 
                                name="sale"
                                type="radio"
                            />
                            <LabelInput
                                style={{
                                    marginLeft: 10
                                }}
                            >
                                Não
                            </LabelInput>
                            <InputValue 
                                name="sale"
                                type="radio"
                                defaultChecked
                            />
                        </div>
                    </InputContainer>
                    <InputContainer 
                        style={{
                            boxShadow: "none"
                        }}
                    >
                        <ButtonSubmit
                            onClick={(e) => {
                                e.preventDefault() // Faz com que a pagina não fique atualizando ao clicar no botão
                                this.addProduct()
                            }}
                        >
                            Cadastrar
                        </ButtonSubmit>
                    </InputContainer>
                </FormBody>
            </FormContainer>
        );
    }
}
