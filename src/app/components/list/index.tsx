import React from "react";

interface ListState {
    setRegisterProduct: void
}

interface ListProps {
    registerProduct: boolean
    setRegisterProduct: (value: boolean) => void
}

export default class List extends React.Component<ListProps, ListState> {
    constructor(props: ListProps) {
        super(props);
        
    }
    render(): React.ReactNode {
        return (
            <div>
                <button onClick={() => {
                    this.props.setRegisterProduct(!this.props.registerProduct)
                }} >
                    Novo produto
                </button>
            </div>
        );
    }
}