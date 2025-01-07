/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from "react";

interface ProductState {
    list: string[]
}

interface ProductProps { }

export default class Product extends Component<ProductProps, ProductState> {

    constructor(props: ProductProps) {
        super(props)
        this.state = {
            list: [],
        };
        this.add = this.add.bind(this)
        this.showList = this.showList.bind(this)
    }
    
    add(): void {
        this.state.list.push("pao")
        this.setState({
            list: this.state.list
        });
        console.log(this.state.list)
    }

    showList() {
        return (
            <ol>
                {this.state.list.map((v, i) => (
                    <li key={i}>{v}</li>
                ))}
            </ol>
        )
    }

    render(): React.ReactNode {
        return (
            <>
                <h1>teste</h1>
                <button onClick={this.add} >
                    pao
                </button>
                {this.showList()}
            </>
        );
    }
}