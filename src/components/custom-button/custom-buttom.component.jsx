import React from 'react'

import './custom-buttom.style.scss'

const CustomButton = ({children,isGoogleSingIn,  ...otherProps}) =>{
    return(
        <button {...otherProps}  className={`${isGoogleSingIn ? 'google-sing-in' : ''} custom-button`}>{children}</button>
    )
}

export default CustomButton;