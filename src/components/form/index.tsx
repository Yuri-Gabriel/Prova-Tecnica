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

export default class Form extends React.Component {
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
                    <InputContainer>
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