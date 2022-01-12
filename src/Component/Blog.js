import React, { useState } from 'react'
import './Blog.css'

const Blog = ({title, deskripsi, tanggal}) => {
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)

    const klikLike = () => {
        setLike(like + 1)
    }

    const disdLike = () => {
        setDisLike(disLike + 1)
    }

    return (
        <div className='wrap-blog'>
            <img src="https://placeimg.com/640/480/tech" alt="" />
            <h3>{title}</h3>
            <p>{deskripsi}</p>
            <p>{tanggal}</p>
            <p>Like : {like}</p>
            <p>Dislike : {disLike}</p>
            <button style={{marginRight:10}} onClick={klikLike}>Like</button>
            <button onClick={disdLike}>Dislike</button>
        </div>
    )
}

export default Blog
