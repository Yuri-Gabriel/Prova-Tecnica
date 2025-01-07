import styled from "styled-components";

export const FormContainer = styled.section`
    border-radius: 20px;

    height: 500px;
    width: 650px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur( 13.5px );

    @media (max-width: 768px) {
        width: 370px;
    }
`;

export const FormBody = styled.form`
    border-radius: 10px;

    width: 400px;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    box-shadow: inset 1px 1px 5px black;

    @media (max-width: 768px) {
        width: 330px;
    }

`;

export const InputContainer = styled.div`
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

    width: 300px;

    display: flex;
    justify-content: space-between;
    flex-direction: column; 

    box-shadow: 1px 1px 5px black;
`;

export const InputValue = styled.input`
    border: none;
    border-bottom: 2px solid black;

    outline: 0;

    background-color: transparent;

    color: #FFFFFF;

    &[type="radio"] {
        margin-left: 5px;
    }
`;

export const LabelInput = styled.label`
    color: #FFFFFF;
    font-weight: bold;
`;

export const ButtonSubmit = styled.button`
    box-shadow: 1px 1px 5px black;

    width: 200px;
    height: 30px;
    
    border-radius: 10px;
    
    margin: auto;

    &:hover {
        cursor: pointer;
    }
`;
