// import React, { useRef, useState } from 'react'
import React from 'react'

const About = (props) => {
    // let darkButtonRef = useRef('Enable dark mode')
    // const [myStyle,setmyStyle] = useState(null)

   

    let myStyle = {
      color:props.mode ==='light'?'black':'white',
      backgroundColor:props.mode==='light'?'white':'black',
      border:'1px solid white'
    }
    // if(props.mode ==='light'){

    // }
   
    // const handleDarkmode= ()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //         })

    //         darkButtonRef.current='disable dark mode'
    //     }
    //     else{
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor:'white',
                
    //         })

    //         darkButtonRef.current='Enable dark mode'
    //     }
    // }

    
  return (
    <div className="accordion" id="accordionExample" style={{color:props.mode ==='light'?'black':'white',backgroundColor:props.mode ==='light'?'white':'black'}}>
        <h1 className='my-3 mx-3'>About Us</h1>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button style={myStyle} className="accordion-button border-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button style={myStyle} className="accordion-button collapsed border-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button style={myStyle} className="accordion-button collapsed border-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  {/* <button className="btn btn-primary mx-3 my-3" onClick={handleDarkmode} ref={darkButtonRef}>{darkButtonRef.current}</button> */}
</div>
  )
}

export default About
