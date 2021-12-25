import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
  
const BasicCard = (props) => {
    return (
    <Card variant="outlined" component="div">
        <CardContent>
            <Typography variant="h3" component="div">
                {props.turn} 차례
            </Typography>
        </CardContent>
    </Card>
  );
}

export default BasicCard;