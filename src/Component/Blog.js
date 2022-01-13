import React, { useState } from 'react'
import './Blog.css'

const Blog = ({title, deskripsi, tanggal}) => {
    const [l, q] = useState(0)
    const [d, w] = useState(0)

    const k = () => {
        q((s) => s + 1)
    }

    const p = () => {
        w((f) => f + 1)
    }

    return (
        <div className='wrap-blog'>
            <img src="https://placeimg.com/640/480/tech" alt="" />
            <h3>{title}</h3>
            <p>{deskripsi}</p>
            <p>{tanggal}</p>
            <p>Like : {l}</p>
            <p>Dislike : {d}</p>
            <button style={{marginRight:10}} onClick={k}>Like</button>
            <button onClick={p}>Dislike</button>
        </div>
    )
}

export default Blog
