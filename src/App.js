import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./Biografi/Comp/NavbarComp";
// import HomeList from "./Biografi/ListContact/HomeList";
import Blog from "./Biografi/Page/Blog";
import Home from './Biografi/Page/Home'
import Portfolio from "./Biografi/Page/Portfolio";
import FormRegister from "./Biografi/Page/FormRegister";
import HtmlBlog from "./Biografi/Comp/BlogComp/DetailBlogComp/HtmlBlog";

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
        <BrowserRouter>
        <NavbarComp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/form" element={<FormRegister />} />
            <Route path="/detail/:id" element={<HtmlBlog />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
