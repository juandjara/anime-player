import React from 'react'

const Icon = ({className, inverse, style = {}, align, children, ...rest}) => {
  return (
    <i className={`material-icons ${className}`}
       style={{
         color: inverse ? 'white' : style.color,
         verticalAlign: align,
         ...style
       }} {...rest}>{children}</i>
  )
}

export default Icon