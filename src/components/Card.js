import React from 'react'
import './styles/Card.css'
import CardImg from './CardImg'
import Faq from './Faq'

const card = () => {
    return (
        <div className="card-styles">
           <CardImg />
           <Faq />
        </div>
    )
}

export default card
