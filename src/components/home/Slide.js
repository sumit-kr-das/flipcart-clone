import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { products } from "../../constants/data"; imported from home
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const useStyle = makeStyles({
  image: {
    height: 180,
  },
  component: {
    marginTop: 12,
    background: "#ffffff",
  },
  deal: {
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    borderBottom: "2px solid #E5E5E5",
  },
  timer: {
    width: 24,
    margin: "0 0.8rem 0 1.5rem",
  },
  timerspan: {
    color: "#7f7f7f",
  },
  txt: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
  },
  curosol: {
    padding: "25px 10px",
  },
  curosoltext:{
    fontSize:14,
    marginTop:5
  }
});

const Slide = ({timer,title,products}) => {
  const classes = useStyle();
  const timerClone =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timerspan}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.txt}>{title}</Typography>
        {
        timer && 
        <><img src={timerClone} className={classes.timer} />
        <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
        <Button variant="contained" color="primary" className={classes.button}>
          View All
        </Button>
        </>
        }
      </Box>
      <Carousel
        className={classes.curosol}
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Box textAlign="center">
            <img src={product.url} className={classes.image} />
            <Typography className={classes.curosoltext} style={{fontWeight:"600", color:"#212121"}} >{product.title.shortTitle}</Typography>
            <Typography className={classes.curosoltext} style={{color:"green"}} >{product.discount}</Typography>
            <Typography className={classes.curosoltext} style={{color:"#212121", opacity:"0.6"}} >{product.tagline}</Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
