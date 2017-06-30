import React from "react";
import * as ReactDOM from "react-dom";
import Products from "./components/Products/productsTable";
import Cart from "./components/Cart/cartTable";
import Button from "react-bootstrap/es/Button";

class App extends React.Component // definition of the class App
{
    constructor(props) // definition of the constructor
    {
        super(props);
        this.state = {currentComponent: <Products/>};
        this.onButtonClick = this.onButtonClick.bind(this);
    } // end of the function constructor

    onButtonClick(event) // definition of the function onButtonClick
    {
        if(event.target.name=="products")
        {
            this.setState({currentComponent: <Products/>});
        }
        if(event.target.name=="cart")
        {
            this.setState({currentComponent: <Cart/>});
        }
    } // end of the function onButtonClick

    render() // definition of the function render
    {
        var currentComponent = this.state.currentComponent;
        return (
            <div style={{marginTop: '1em'}}>
                <Button id="productsTab" bsStyle="primary" name="products" style={{marginRight: '1.5em', fontSize: '1.5em'}} onClick={this.onButtonClick}>Products</Button><Button id="cartTab" bsStyle="primary" name="cart" onClick={this.onButtonClick} style={{marginLeft: '0.1em', fontSize: '1.5em'}}>Cart</Button>
                {currentComponent}
            </div>
        );
    };
} // end of the class definition

var app = <App/>;
// console.log(app);
var node = document.getElementById("app");
// console.log(node);
ReactDOM.render(app, node);
