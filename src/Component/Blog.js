import React, { useState } from 'react'
import './Blog.css'

const Blog = ({t, d, ta}) => {
    const [l, q] = useState(0)
    const [z, w] = useState(0)

    const k = () => {
        q((s) => s + 1)
    }

    const p = () => {
        w((f) => f + 1)
    }

    return (
        <div className='wrap-blog'>
            <img src="https://placeimg.com/640/480/tech" alt="" />
            <h3>{t}</h3>
            <p>{d}</p>
            <p>{ta}</p>
            <p>Like : {l}</p>
            <p>Dislike : {z}</p>
            <button style={{marginRight:10}} onClick={k}>Like</button>
            <button onClick={p}>Dislike</button>
            {/* <button onClick={o}></button> */}
        </div>
    )
}

export default Blog
