import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CardNewsAndEvents.module.scss';

function CardNewsAndEvents({title, imageUrl}) {
  const match = useRouteMatch();
  return <div className={styles.cardNewsAndEvents}>
 <Card sx={{ maxWidth: 800, maxHeight: 300, display: "flex", flexDirection: "row" }}>
 <CardContent component="div" sx={{padding: "0", maxWidth: 400, minHeight: 300}}>
        <CardMedia sx={{objectFit: "cover", height: "100%", maxWidth:"100%"}}
          component="img"
          image={imageUrl}
          alt="news"/>
</CardContent>
        <CardContent className={styles.cardContent} sx={{background:"#cfcfcf", minWidth: 400, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", '@media screen and (max-width: 479px)': {
      maxWidth: '350px',
    },}}>
            <Typography component="h3" sx={{alignSelf:"stretch"}}>
              {title}
            </Typography>
          <CardActions>
            <Link to={`${match.url}/${title}`} >
              <Button variant="contained" size="medium" sx={{background:"#72a479", ":hover": {background: "#486e4d"}}}>
                Detalied
              </Button>
            </Link>
           </CardActions>
        </CardContent>  
    </Card>

  </div>;

}

CardNewsAndEvents.propTypes={
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default CardNewsAndEvents;
