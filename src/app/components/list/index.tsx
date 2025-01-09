import React from "react";

import {
    ListProps,
    ListState
} from "../../types";

import {
    ListContainer,
    ButtonAdd,
    ListTable,
    ListHead,
    ListBody,
    ListRow,
    ListData
} from "./style";

export default class List extends React.Component<ListProps, ListState> {
    constructor(props: ListProps) {
        super(props);
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
                <ListContainer>
                    <div>
                        <ButtonAdd onClick={() => {
                            this.props.setRegisterProduct(true)
                        }}>
                            Cadastrar novo produto
                        </ButtonAdd>
                    </div>
                    {
                        this.props.productList.length > 0 &&
                        <ListTable>
                            <ListHead>
                                <ListRow>
                                    <th>Titulo</th>
                                    <th>Descrição</th>
                                    <th>Preço</th>
                                    <th>Está a venda?</th>
                                </ListRow>
                            </ListHead>
                            <ListBody>
                                {
                                    this.props.productList.map((product, key) => (
                                        <ListRow key={key}>
                                            <ListData>{product.title}</ListData>
                                            <ListData>{product.description}</ListData>
                                            <ListData>{`R$${product.price},00`}</ListData>
                                            <ListData>{product.isSale ? "sim" : "não"}</ListData>
                                        </ListRow>
                                    ))
                                }
                            </ListBody>
                        </ListTable>
                    }
                </ListContainer>
            </section>
            
        );
    }
}