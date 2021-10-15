import React from 'react'
import Button from './Button'
import "./Button.css"
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero">
            <h1 className="title">Flowers for the loved ones</h1>
            <div className="btns">
                <Button children="Buy" buttonStyle="btn-outline" />
                <Button children="Sell" buttonStyle="btn-filled" />
            </div>
        </div>
    )
}

export default HeroSection
