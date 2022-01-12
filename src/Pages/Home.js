import React from 'react'
import Blog from '../Component/Blog'

const Home = () => {
    return (
        <div>
            <Blog 
            title="Apa itu HTML"
            deskripsi="HTML merupakan sebuah mark up yang digunakan untuk website"
            tanggal="20 Desember 2021"/>
            <Blog 
            title="Apa itu CSS"
            deskripsi="CSS adalah salah satu jenis kode untuk mempercantik website"
            tanggal="20 Desember 2021"/>
            <Blog 
            title="Apa itu Javascript"
            deskripsi="JavaScript adalah bahasa pemrograman untuk membuat website dinamis"
            tanggal="20 Desember 2021"/>
            <Blog 
            title="Belajar React JS"
            deskripsi="Memulai belajar React untuk membuat website user interfaces"
            tanggal="20 Desember 2021"/>
        </div>
    )
}

export default Home
