import Reacr from 'react'

import './custom-buttom.style.scss'

const CustomButton = ({children, ...otherProps}) =>{
    return(
        <button {...otherProps}  className='custom-button'>{children}</button>
    )
}

export default CustomButton;