import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Cards({desc,image,title,time,id}) {
    const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0,23)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc.slice(0,100)}
        </Typography>
        <Typography sx={{marginTop:2}} variant="body2" color="text.secondary">
          Create at: {time.slice(0,10)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>navigate(`/product/${id}`)} size="medium" variant='contained'>Add</Button>
      </CardActions>
    </Card>
  );
}
