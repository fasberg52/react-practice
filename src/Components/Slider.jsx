import React from 'react'
import Arrrow from './Arrrow'
import Card from './Card'

export default function Slider() {
    return (
        <div className="slide-container">
            <div className="wrapper">
                <Arrrow />
                <Card />
                <Arrrow />
            </div>
        </div>
    )
}
