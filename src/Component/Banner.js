import React from 'react'
import style from './Banner.module.css'

const Banner = () => {

    const gaya = {
        color: "green",
        fontSize: 50
    }
    return (
        <div>
            <h3 className={style.banner}>Ini adalah Banner</h3>
            <p style={gaya}>Ini adalah gaya</p>
        </div>
    )
}

export default Banner
