import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

// import { products } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts as listProducts } from "../../redux/constants/productActions";

const useStyle = makeStyles(theme=>({
  back:{
    backgroundColor:"#f2f2f2"
  },
  component: {
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  rightimg: {
    background: "#ffffff",
    padding: 5,
    margin: "12px 0 0 10px",
    [theme.breakpoints.down('md')]:{
      display:"none"
    }
  },
  sliderWidth:{
    width: "83%",
    [theme.breakpoints.down('md')]:{
      width:"100%"
    }
  }
}));

const Home = () => {
  const classes = useStyle();
  const imgUrl =
    "https://rukminim1.flixcart.com/flap/464/708/image/a81d569793c249d1.jpg?q=70";
  const {products} = useSelector(state=>state.getProducts);
  const dispatch = useDispatch(); 

  useEffect(()=>{
    dispatch(listProducts());
  },[dispatch]);

  return (
    <Box className={classes.back}>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
      </Box>
      <Box style={{ display: "flex" }}>
        <Box className={classes.sliderWidth} >
          <Slide timer={true} title={"Deals of the Day"} products={products} />
        </Box>
        <Box className={classes.rightimg}>
          <img src={imgUrl} style={{ width: "230px" }} />
        </Box>
      </Box>
      <MidSection/>
      <Slide timer={false} title={"Best Price On Fashion"} products={products} />
      <Slide timer={false} title={"Discover the Best Value Deals"} products={products} />
      <Slide timer={false} title={"Discounts for You"} products={products} />
      <Slide timer={false} title={"Suggested Items"} products={products} />
      <Slide timer={false} title={"Top Selections"} products={products} />
      <Slide timer={false} title={"Best Sellers"} products={products} />
    </Box> 
  );
};

export default Home;
