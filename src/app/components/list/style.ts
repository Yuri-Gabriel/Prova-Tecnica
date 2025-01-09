import styled from "styled-components";

export const ListContainer = styled.div`
    width: 90vw;
    max-width: 500px;
    & > div {
        padding: 10px;
    }

    @media (min-width: 768px) {
        width: 500px;
    }
`;

export const ButtonAdd = styled.button`
    display: block;
    width: 100%;
    margin: auto;
    padding: 10px 0px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
`;

export const ListTable = styled.table`
    width: 500px;

    & * {
        border: 1px solid #FFFFFF;
        padding: 2px;
        color: #FFFFFF;
    }
`;

export const ListHead = styled.thead`
    width: 100%;
`;

export const ListBody = styled.tbody`
    width: 100%;
`;

export const ListRow= styled.tr`
    width: 100%;

    & th {
        padding: 10px;
    }
`;

export const ListData = styled.td`
    text-align: center;
    padding: 5px;
    max-width: 120px;

    &::-webkit-scrollbar {
        height: 5px;
    }
    
    overflow-x: scroll;
`;