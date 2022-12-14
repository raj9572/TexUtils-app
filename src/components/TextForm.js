import React, { useState } from 'react'

const TextForm = (props) => {

    const [text,setText] = useState('')
    const handleChange=(event)=>{
        setText(event.target.value)
    }

    const handleUpperCase=()=>{
        const UpperText = text.toUpperCase()
        setText(UpperText)
        props.showAlert('Uppercase converted successful','success')
    }
    const handleLowerCase=()=>{
        const LowerText = text.toLowerCase()
        setText(LowerText)
        props.showAlert('LowerCase converted  successful','success')
    }
    const handleClearText=()=>{
        setText('')
        props.showAlert('clear text is successful','success')
    }
  return (
    <>
    <div className="mb-3 container">
        <h2 className='mb-3'>TextUtils -for text manupulation</h2>
        <textarea className={`form-control bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'}`} id="exampleFormControlTextarea1" value={text} onChange={handleChange} rows="8"></textarea>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleUpperCase}>convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleLowerCase}>convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleClearText}>ClearText Your text</button>
     </div>

     <div className="container">
        <h2> your Text summary</h2>
        <p>{text.split(" ").filter(elem => elem.length !== 0).length} words , {text.length} charactor</p>
        <p>{(0.008 * text.length).toFixed(2)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length === 0?'Enter text to preview':text}</p>

     </div>

     </>

  )
}

export default TextForm
