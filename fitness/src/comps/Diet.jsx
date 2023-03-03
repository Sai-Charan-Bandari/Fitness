import React, { useState } from "react";
import "../App.css";
import { Card, Button } from "react-bootstrap";
import { TextField } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
function Diet() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [img, setImg] = useState(false);
  return (
    <div>
      {!img && <Card
        style={{
          margin: 25,
          width: 550,
          marginTop: 20,
          margin: "auto",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
       <Card.Text style={{ paddingTop: 20, fontSize: 20 }}>
          Diet Plan
        </Card.Text>
        <TextField inputProps={{ style: { fontFamily: 'baron' } }} InputLabelProps={{ style: { fontFamily: 'baron' } }}
          type="text"
          style={{ width: 350, marginLeft: 10, marginRight: 10, marginTop: 20 }}
          label="current weight: "
        ></TextField>
        <TextField inputProps={{ style: { fontFamily: 'baron' } }} InputLabelProps={{ style: { fontFamily: 'baron' } }}
          type="text"
          style={{ width: 350, marginLeft: 10, marginRight: 10, marginTop: 20 }}
          label="current height: "
        ></TextField>
        <TextField inputProps={{ style: { fontFamily: 'baron' } }} InputLabelProps={{ style: { fontFamily: 'baron' } }}
          type="text"
          style={{ width: 350, marginLeft: 10, marginRight: 10, marginTop: 20 }}
          label="target weight: "
        ></TextField>
        <TextField inputProps={{ style: { fontFamily: 'baron' } }} InputLabelProps={{ style: { fontFamily: 'baron' } }}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
          style={{ marginLeft: 10, marginRight: 10, width: 350, marginTop: 20 }}
          label="starting date: "
        ></TextField>
        <TextField inputProps={{ style: { fontFamily: 'baron' } }} InputLabelProps={{ style: { fontFamily: 'baron' } }}
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
          style={{ marginLeft: 10, marginRight: 10, width: 350, marginTop: 20 }}
          label="Ending date: "
        ></TextField>
        <br />
        <Button
          onClick={() => {
            setImg(!img);
          }}
          variant="secondary"
          style={{ marginBottom: 20, width: 120 }}
        >
          Start Diet
        </Button>
      </Card>}

      {img && <img src='plan.jpg' width="70%" height="70%" style={{marginLeft:220}} />}
    </div>
  );
}


export default Diet