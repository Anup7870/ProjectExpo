import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Product() {
  const [value, setValue] = useState(2);
  return (
    
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image='/static/images/cards/contemplative-reptile.jpg'
          title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Title fo the project
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            College Name
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}>
            {/* <Typography component="legend"></Typography> */}
            <Rating
              name='simple-controlled'
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </CardActions>
      </Card>
    
  );
}
