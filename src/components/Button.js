import React from 'react'

function Button({children, buttonStyle, buttonSize}) {
    const styles = ['button-filled', 'button-outline']
    const sizes = ['small', 'medium']

    const btnStyle = styles ? buttonStyle : styles[0]
    const btnSize = sizes ? buttonSize : sizes[0]

    return (
        <button className={btnStyle}>{children}</button>
    )
}

export default Button
