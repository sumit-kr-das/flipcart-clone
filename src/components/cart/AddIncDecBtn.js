import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  component: {
    marginTop: 25,
  },
});

const AddIncDecBtn = () => {
  const classes = useStyles();
  const [counter, setCounter] = useState(1);
    const decrement = () =>{
        setCounter(counter=>counter-1);
    }
    const increment = () =>{
        setCounter(counter=>counter+1);
    }
  return (
    <ButtonGroup className={classes.component}>
      <Button onClick={() => decrement()} disabled={counter == 1} >-</Button>
      <Button>{counter}</Button>
      <Button onClick={() => increment()}>+</Button>
    </ButtonGroup>
  );
};

export default AddIncDecBtn;
