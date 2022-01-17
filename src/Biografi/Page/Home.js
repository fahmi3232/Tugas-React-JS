import React from 'react'
import Bann from '../Comp/Bann'
// import { Navbar } from 'react-bootstrap'
import Banner from '../Comp/Banner'
// import Biografi from '../Comp/Biografi'
import Contactt from '../Comp/Contactt'
import Footer from '../Comp/Footer'
import Motto from '../Comp/Motto'
import NavbarComp from '../Comp/NavbarComp'
// import Top from '../Comp/Top'

const Home = () => {
    return (
        <div className='trs'>
            <NavbarComp />
            <Banner />
            <Bann />
            {/* <Biografi /> */}
            <Contactt />
            <Motto />
            <Footer />
        </div>
    )
}

export default Home
