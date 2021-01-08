import React, { Component } from "react";
import "../src/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Filter from "./components/filter";
import data from "./data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
    };
  }

  addToCart = () => {
      // this.setState()
      // const sort = e.target.value;
      // if (e.tsrget.value === "") {
      //   this.setState({sort:sort, products: data.products});
      // } else {
      //   this.setState({

      //   })
      // }
  };

  handleFilterProducts = (e) => {
    const size = e.target.value;
    if (e.target.value === "") {
      this.setState({ size: size, products: data.products });  
    } else {
      this.setState({
        cartItems: [],
        size: size,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(size) >= 0
        ),
      });
    }
  };

  handleSortProducts = (e) => {
    const sort = e.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === "lowest" ? ((a.price > b.price) ? 1 : -1): 
        sort ==="highest" ? ((a.price < b.price) ? 1 : -1):
        ((a._id > b._id) ? 1 : -1)
      ))
    }));
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <Header />
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                sort={this.state.sort}
                size={this.state.size}
                filterProducts={this.handleFilterProducts}
                sortProducts={this.handleSortProducts}
              />
              <p className="product-header">Product List</p>
              <ProductList products={this.state.products} addToCart={this.addToCart} >
              </ProductList>
            </div>
            <div className="sidebar">Cart items</div>
          </div>
        </main>
        <footer>
          <Footer />
          <h1>I am a React Pro</h1>
        </footer>
        {/* <h1>I am a React Pro, I'm {Math.floor(Math.random() * 50)} years old.</h1> */}
      </div>
    );
  }
  // return React.createElement("div", null, React.createElement("h1", null, "I'm can write react in JSX"), React.createElement("i", null, "This is a new paragraph"));
}

export default App;
