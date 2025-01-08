import React from "react";

import {
    ListProps,
    ListState
} from "../../types";

export default class List extends React.Component<ListProps, ListState> {
    constructor(props: ListProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div style={{
                display: this.props.registerProduct ? "none" : "block"
            }}>
                <button onClick={() => {
                    this.props.setRegisterProduct(true)
                }} >
                    Novo produto
                </button>
                <ul>
                    {this.props.productList.map((v, k) => (
                       <li key={k}>
                        {v.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}