import React from 'react'

const Alert = (props) => {

    const Capitalize = (msg)=>{
            return msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase()
    }
  return (
    <div style={{height:'50px'}}>
   {props.text && <div className={`alert alert-${props.text.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.text.type)} </strong>: {props.text.msg}
    </div>}
    </div>
  )
}

export default Alert
