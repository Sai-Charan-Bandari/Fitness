import React from 'react'
import Button from 'react-bootstrap/esm/Button'
function ContactUs() {
  return (
    <section className="bg-primary bg-dark text-light p-5" id='contact'>
    <div className="container">
        <h3 className="text-warning text-center mb-5">CONTACT US</h3>
        <div className="d-flex justify-content-between align-items-center">
        <div className="" style={{paddingLeft:200}}>
            <img src="img.jpg" alt="" className=""/>

        </div>
        <div className="formd" style={{marginRight:80}} >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name :</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter your name"/>
            </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Query :</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className="mt-5">
                <Button className="btn-primary btn-lg" >SUBMIT</Button>
            </div>
            </div>
        </div>
        </div>

</section>
  )
}

export default ContactUs