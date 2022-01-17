import React from 'react'
import Banner from '../Component/Banner'
import Blog from '../Component/Blog'

const Home = () => {
    return (
        <div>
            <Blog 
            t="Apa itu HTML"
            d="HTML merupakan sebuah mark up yang digunakan untuk website"
            ta="20 Desember 2021"/>
            <Blog 
            t="Apa itu CSS"
            d="CSS adalah salah satu jenis kode untuk mempercantik website"
            ta="20 Desember 2021"/>
            <Blog 
            t="Apa itu Javascript"
            d="JavaScript adalah bahasa pemrograman untuk membuat website dinamis"
            ta="20 Desember 2021"/>
            <Blog 
            t="Belajar React JS"
            d="Memulai belajar React untuk membuat website user interfaces"
            ta="20 Desember 2021"/>
            <Banner />
        </div>
    )
}

export default Home
