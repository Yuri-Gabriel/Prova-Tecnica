/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from "react";

import Image from "next/image";
import CloseIMG from "../../../../public/close.svg"

import {
    FormContainer,
    FormBody,
    InputContainer,
    InputValue,
    LabelInput,
    ButtonSubmit
} from './style';

import {
    FormProps,
    FormState,
    Product
} from "../../types";

export default class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props)
        this.state = {
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
        const currentList: Product[] = this.props.productList
        currentList.push({
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            isSale: this.state.isSale
        });
        this.props.setProductList(currentList);
        this.props.setRegisterProduct(false);
        console.log(this.props.productList)
    }

    render(): React.ReactNode {
        return (
            <section style={{
                position: "absolute",
                top: 0,
                left: 0,
                

                width: "100vw",
                height: "100vh",

                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <FormContainer>
                    <Image
                        style={{
                            cursor: "pointer",
                            alignSelf: "flex-end",
                            marginBottom: 20,
                            marginRight: 30
                        }}
                        src={CloseIMG}
                        alt="close icon"
                        onClick={() => {
                            this.props.setRegisterProduct(false);
                        }}
                    />
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
                                    onClick={() => {
                                        this.setState({
                                            isSale: true
                                        })
                                    }}
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
                                    onClick={() => {
                                        this.setState({
                                            isSale: false
                                        })
                                    }}
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
            </section>
            
        );
    }
}
