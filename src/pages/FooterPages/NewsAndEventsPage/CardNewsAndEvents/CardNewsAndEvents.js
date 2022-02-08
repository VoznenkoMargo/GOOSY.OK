import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './CardNewsAndEvents.module.scss';

function CardNewsAndEvents({title, imageUrl}) {
  return <div className={styles.cardNewsAndEvents}>
 <Card sx={{ maxWidth: 800, maxHeight: 300, display: "flex", flexDirection: "row" }}>
 <CardContent component="div" sx={{padding: "0", maxWidth: 400, minHeight: 300}}>
        <CardMedia sx={{objectFit: "cover", height: "100%", width:"100%"}}
          component="img"
          image={imageUrl}
          alt="news"/>
</CardContent>
        <CardContent sx={{background:"#cfcfcf", minWidth: 400, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between"}}>
            <Typography component="h3" sx={{alignSelf:"stretch"}}>
              {title}
            </Typography>
          <CardActions>
            <Link to= {`/news-and-events/${title}`} >
              <Button variant="contained" size="medium" sx={{background:"#72a479"}}>
                Detalied
              </Button>
            </Link>
           </CardActions>
        </CardContent>  
    </Card>
  </div>;
}

export default CardNewsAndEvents;
