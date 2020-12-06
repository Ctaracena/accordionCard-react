import React from 'react'
import img from '../images/illustration-woman-online-desktop.svg'
/* import box from '../images/illustration-box-desktop.svg' */
import './styles/CardImg.css'

const CardImg = () => {
    return (
        <div>
            <img src={img} alt="Woman Online" className="woman"/>
            {/* <img src={box} alt="box" className="box"/> */}
        </div>
    )
}

export default CardImg
