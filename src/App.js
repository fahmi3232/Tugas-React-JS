import React, { Component } from "react";
import Home from './Biografi/Page/Home'
// import About from "./Pages/About";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       h : false
    }
  }
  
  render() {
    return (
      <div>
        {/* <Home />
        <button style={{marginTop: 50}} onClick={() => this.setState({h: !h})}>
          {h ? "Tampilkan Data" : "Sembunyikan Data"}
        </button>
        {!h && <About n="Fahmi Oktafian" a="Madiun" />} */}
        <Home />
      </div>
    );
  }
}
