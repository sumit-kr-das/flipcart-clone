import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

const useStyle = makeStyles({
  component: {
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  rightimg: {
    background: "#ffffff",
    padding: 5,
    margin: "12px 0 0 10px",
  },
});

const Home = () => {
  const classes = useStyle();
  const imgUrl =
    "https://rukminim1.flixcart.com/flap/464/708/image/a81d569793c249d1.jpg?q=70";
  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
      </Box>
      <Box style={{ display: "flex" }}>
        <Box style={{ width: "83%" }}>
          <Slide timer={true} title={"Deals of the Day"} />
        </Box>
        <Box className={classes.rightimg}>
          <img src={imgUrl} style={{ width: "230px" }} />
        </Box>
      </Box>
      <MidSection/>
      <Slide timer={false} title={"Best Price On Fashion"} />
      <Slide timer={false} title={"Discover the Best Value Deals"} />
      <Slide timer={false} title={"Discounts for You"} />
      <Slide timer={false} title={"Suggested Items"} />
      <Slide timer={false} title={"Top Selections"} />
      <Slide timer={false} title={"Best Sellers"} />
    </>
  );
};

export default Home;
