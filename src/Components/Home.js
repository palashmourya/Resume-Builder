import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2"; // Grid version 2
import templateOneImg from "../Images/resume-template-one.JPG";
import templateTwoImg from "../Images/resume-template-two.JPG";
import { Button } from "@mui/material";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="template-title">
        <h2 className="temp-head">Templates</h2>
        <p className="temp-para">Select a template to get started</p>
        <Grid className="grid-container" container rowSpacing={1}>
          <Grid xs={4}>
            <Item>
              <img className="temp1" src={templateOneImg}></img>
              <Button className="use-template">Use Template</Button>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item>
              <img className="temp2" src={templateTwoImg}></img>
              <Button className="use-template1">Use Template</Button>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
