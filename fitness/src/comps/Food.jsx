import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { TextField } from "@mui/material";

function Food() {
    return (
        <div>
            <nav className="navbar navbar-epand-lg bg-dark navbar-dark">
                <div className="container-fluid  justify-content-center" >
                    <div className="h1 text-warning text-center" >FOOD DETAILS</div>
                </div>

            </nav>

            <section className="bg-primary bg-dark text-light">

                <div className="container-fluid text-center" >
                    <img src="diet.jpg" alt="" className="img-fluid w-50 rounded-3" />
                </div>
                <div className="bg-dark text-light text-center p-5 m-4" style={{ backgroundColor: 'rgb(31,31,31)', marginBottom: '100' }}>
                    <h3 className="text-center text-warning" >CALORIE finder</h3>

                    <form action="" className="form-control d-flex flex-column align-items-center gap-3 py-4" id="foodform" >
                        <div className='d-flex align-items-center'>
                        <label htmlFor="name" type="text" className='me-2' >Your FOOD:</label>
                        <TextField inputProps={{ style: { fontFamily: 'baron' } }} InputLabelProps={{ style: { fontFamily: 'baron' } }}
                            label="ENTER THE ITEM"
                        ></TextField>
                        </div>
                        <div className='d-flex align-items-center'>
                        <label htmlFor="name" type="text" className='me-2' >Routine:(times per day)</label>
                        <TextField inputProps={{ style: { fontFamily: 'baron' } }} InputLabelProps={{ style: { fontFamily: 'baron' } }}
                            label="range(1-10)"
                        ></TextField>
                        </div>
                        <div className='d-flex align-items-center'>
                        <label htmlFor="name" type="text" className='me-2' >DATE OF BIRTH:</label>
                        <TextField inputProps={{ style: { fontFamily: 'baron' } }} InputLabelProps={{ style: { fontFamily: 'baron' } }}
                            label="ENTER THE ITEM"
                        ></TextField>
                        </div>
                        <Button className="btn-primary btn-large" style={{ marginBottom: 30 }}>Find your calories</Button>


                    </form>
                </div>


            </section>

        </div>
    )
}

export default Food