import React, { useContext, useState } from 'react'
import { AppContext } from '../App';
import { Card } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import {useNavigate} from 'react-router-dom'
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function Profile() {

    let [u,setu]=useState('')
    let [p,setp]=useState('')

  const codes = {
    australia: "australia + 97",
    america: "america + 1 - 684",
    newzealand: "newzealand + 64",
  };
  let nav=useNavigate()
  const { setuser } = useContext(AppContext);
  return (
    <div
    className="bg-dark container-fluid p-5 ">
      <Card  className="col-4 m-auto align-items-center text-center" >
        <Card.Img
        className="my-4"
          src={'mylogo.png'}
          style={{
            width: 150,
            height: 150,
            borderRadius: 60,
            marginBottom: 30,
          }}
        />
        <Card.Body className="align-items-center">
          <FormControl style={{ width: 100 }}>
            <InputLabel id="demo-simple-select-label" style={{fontFamily:'baron'}}>+91</InputLabel>
            <Select 
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="+91"
              //   onChange={handleChange}
            >
              <MenuItem style={{fontFamily:'baron'}}>{codes.australia}</MenuItem>
              <MenuItem style={{fontFamily:'baron'}}>{codes.america}</MenuItem>
              <MenuItem style={{fontFamily:'baron'}}>{codes.newzealand}</MenuItem>
            </Select>
          </FormControl>
          <TextField inputProps={{style: {fontFamily:'baron'}}} InputLabelProps={{style: {fontFamily:'baron'}}}  
          onChange={(e)=>setp(e.target.value)} value={p}
            label="Mobile Number"
          ></TextField>
          <TextField inputProps={{style: {fontFamily:'baron'}}} InputLabelProps={{style: {fontFamily:'baron'}}}
           onChange={(e)=>setu(e.target.value)} value={u}
            label="Username"
           className='mt-3 col-8' 
          ></TextField>
          <br />
          <Button  onClick={()=>{setuser({name:u,no:p});nav('/')}}
            variant="contained"
            className='my-3 col-8'
            style={{
              fontSize: 16,fontFamily:'baron'
            }}
          >
            CONTINUE
          </Button>
          <div>
            <Card.Text style={{ fontSize: 21 }}>Or connect with</Card.Text>
            <Button>
              <FacebookIcon style={{ width: 45, height: 45 }}></FacebookIcon>
            </Button>
            <Button>
              <GoogleIcon style={{ width: 45, height: 45 }}></GoogleIcon>
            </Button>
            <Button>
              <LinkedInIcon style={{ width: 45, height: 45 }}></LinkedInIcon>
            </Button>
            <Button>
              <EmailIcon style={{ width: 45, height: 45 }}></EmailIcon>
            </Button>
          </div>
          <Card.Text style={{ fontSize: 17, fontFamily: "verdana" }}>
            *By Continuing you agree to the{" "}
            <b>
              Terms of <br />
              Services
            </b>{" "}
            and
            <b> Privacy policy</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;