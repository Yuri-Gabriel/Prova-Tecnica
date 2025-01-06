import styled from "styled-components";

export const FormContainer = styled.section`
    border: 1px solid red;
    border-radius: 20px;

    height: 500px;
    width: 650px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormBody = styled.form`
    border: 1px solid red;
    width: 400px;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    border: 1px solid green;
    margin: 10px;
    padding: 10px;

    width: 300px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    
`;

export const InputValue = styled.input`
    border: none;
    border-bottom: 2px solid black;

    &:focus {
        border: none;
    }
`;

export const LabelInput = styled.label`

`;

export const ButtonSubmit = styled.button`

`;
