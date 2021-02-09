import React from 'react'
import {withRouter} from 'react-router-dom'

import './menu.-item.style.scss'

const MenuItem = ({title, imageUrl, size, linkUrl, match, history}) =>{
return(
<div className={`${size} menu-item`} onClick={()=>history.push(`${match.path}${linkUrl}`)}>
<div className='background-image' 
style={{
    backgroundImage : `url(${imageUrl})`
}}/>
    <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
)}

export default withRouter(MenuItem);