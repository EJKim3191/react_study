import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    
    width: '70px',
    height: '70px',
    fontSize: 50,
  }));

const Square = ( {value, makeTurn, newGame} ) => {
    const [clicked, setClicked] = useState(0);
    const [pic, setPic] = useState(' ');

    useEffect(()=>{
        setClicked(0);
        setPic(' ');
    }, [newGame]);

    const click = () => {
        if(clicked==0) setClicked(1);
        else {
            //setClicked(0);
            return;
            //여기서 block을 시키면 된다
        };

        setPic(value);
        makeTurn();
    }
    


    return (
        <div>
            <ColorButton variant="contained" size="large" onClick={click}>{pic}</ColorButton>
        </div>
        );
};

export default Square;