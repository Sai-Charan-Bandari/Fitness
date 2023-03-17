import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { AppContext } from '../App';
import {Link,useNavigate} from 'react-router-dom'

function Home() {
    const { user } = useContext(AppContext);
    let nav=useNavigate()
  return (
    <div>
  
    <section className="bg-dark text-light p-5 text-center text-sm-start">
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1 >Become a <span className="text-warning"> FITNESS MODEL </span></h1>
                    <p className="lead my-4"><span className="text-warning" >CROSSFIT</span> allows you to get your dream body by suggesting you an excellent diet along with the best training approaches by professional fitness coaches across the globe. </p>
                    {/* whenever we want to navigate to other routes use only useNavigate or Link tag
                    when u want to navigate to an element within the page use anchor tag
                    ... 
                    The bootstrap Button comp is generally anchor tag so we should not use href ... instead use onClick + useNavigate
                    */}
                    {!user ?
                    <Button onClick={()=>nav('/profile')} className="btn-primary btn-lg">START THE PRACTICE NOW</Button> 
                    :
                    <Button href={'#fitness'} className="btn-primary btn-lg">START THE PRACTICE NOW</Button> 
                    }
                </div>
                
                <img className="img-fluid w-50 d-none d-sm-block" src="exerciseHowOften-944015592-770x533-1.jpg"/>
            </div>
        </div>
    </section>

    <section className="bg-primary text-light p-5 text-center">
        <div className="container">
        <div className="d-md-flex align-items-center justify-content-between">
            <div className="div">
                <h3 className="mb-3 mb-md-0">for any queries</h3>

            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-dark bg-dark text-light" type="button" id="button-addon2">sEND</button>
              </div>
            

        </div>
    </div>
    </section>

    <section className="p-5" id='fitness'>
        <div className="container">
            <div className="row text-center">
                <div className="col-md">
                    <div className=" card bg-dark text-light">
                        <div className="card-body text-center" style={{alignItems: 'center'}}>
                            <i className="bi bi-wrench"></i>
                            
                        </div>
                        <h3 className="card-title text-warning">
                            FITNESS
                        </h3>
                        <p className="card-text text-center p-3">
                            We will be delivering you some of the best exercies available in the entire world. These exercises not only enhance your body, but also the healthcare you take and the health you wish for. It will prevent you from getting diseases and to maintain a happy and a healthier life.

                        </p>
                        <Link to="/fitness" className="btn btn-primary btn-sm m-2">Learn More</Link>
                 </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body text-center">
                            <i className="bi bi-egg-fried"></i>
                        </div>
                        <h3 className="card-title text-warning">
                            Food
                        </h3>
                        <p className="card-text p-1">
                            We will guide you to get a perfect diet along with their nutritional values to get you a perfect body. These diets will help you to acheieve a perfect body as well as to keep you healty and safe. We will even determine the consequences of the food which may harm you and can gain obesity for your body. 
                        </p>
                        <Link to="/food" className="btn btn-primary btn-sm m-2">Learn More</Link>
                 </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-light">
                        <div className="card-body text-center">
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <h3 className="card-title text-warning">
                            trainer
                        </h3>
                        <p className="card-text  text-center p-2">
                            We will guide you throughout the entier course with some of our best instructors along with the material we provide you. These trianers usually trains some of our most hollywood heroes such as JohnWick and Tom cruise etc. They will give you tips along with some of the basic nutritional guidelines.
                        </p>
                        <Link to="/diet" className="btn btn-sm btn-primary m-2">Learn More</Link>
              </div>
                </div>
                
            </div>
        </div>
    </section>

    <section className="bg-primary bg-light text-dark" id="food">
        <div className="container">
            <div className="d-md-flex align-items-center justify-content-between">
                <div>
                        <h3 className="text-success" style={{fontSize:50}}>FOOD</h3>
                        <p className="lead my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis ut atque, nulla illum iste dolore? Cupiditate maxime repellendus molestias.
                        </p>
                        <Button onClick={()=>{
                            if(!user)
                            nav('/profile')
                            else
                            nav('/food')
                        }} className="btn btn-primary">GET FOOD DIET</Button>
                </div>
                <img className="img-fluid w-50 d-none d-sm-block" src="cartoon-couple-eating-fast-food-at-cafeteria-vector-30430945.jpg" alt=""/>
            </div>
        </div>

    </section>

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

    </div>
  )
}

export default Home