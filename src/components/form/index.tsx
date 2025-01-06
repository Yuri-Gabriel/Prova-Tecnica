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

interface FormProps {
    
}

interface FormState {
    products: Product[]
}

export default class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props)

        this.setState({
            products: []
        })
    }
    render(): React.ReactNode {
        return (
            <FormContainer>
                <FormBody>
                    <InputContainer>
                        <LabelInput>Titulo</LabelInput>
                        <InputValue 
                            type="text"
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelInput>Descrição</LabelInput>
                        <InputValue 
                            type="text"
                        />
                    </InputContainer>
                    <InputContainer>
                        <LabelInput>Preço</LabelInput>
                        <InputValue 
                            type="number"
                        />
                    </InputContainer>
                    <InputContainer style={{
                        flexDirection: "row"
                    }}>
                        <LabelInput>Está a venda?</LabelInput>
                        <InputValue 
                            type="checkbox"
                        />
                    </InputContainer>
                    <InputContainer>
                        <ButtonSubmit>Cadastrar</ButtonSubmit>
                    </InputContainer>
                </FormBody>
            </FormContainer>
        );
    }
}
