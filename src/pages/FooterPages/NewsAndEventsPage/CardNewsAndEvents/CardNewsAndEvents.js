import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardNewsAndEvents({title, imageUrl}) {
  const match = useRouteMatch();
  return <div>
  <Card sx={{ maxWidth: 800, maxHeight: 300, display: "flex", flexDirection: "row" }}>
        <CardContent component="div" sx={{padding: "0", maxWidth: 400, minHeight: 300 }}>
          <CardMedia sx={{objectFit: "cover", height: "100%", maxWidth:"100%", "@media screen and (max-width: 767px)" : {display:"none"}}}
            component="img"
            image={imageUrl}
            alt="news"/>
        </CardContent>
          <CardContent sx={{background:"#cfcfcf", position: "relative", zIndex: 2,
            width: 400, maxWidth: 400, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between",  
          ":before": {
            content: `" "" "`,
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            opacity: 0.3,
            backgroundImage: "url(https://media.istockphoto.com/vectors/duck-step-icon-duck-paw-icon-isolated-on-white-background-vector-vector-id1225422115?k=20&m=1225422115&s=170667a&w=0&h=niAhg-KPpVzmBks7StDRPLTbI64jYfKii5ueFpcRbZw=)",
            backgroundSize: "cover",
          },
          '@media screen and (max-width: 479px)': {width: 300, minWidth: 300}
          }}>
              <Typography component="h3" sx={{alignSelf:"stretch", zIndex: 2}}>
                {title}
              </Typography>
            <CardActions>
              <Link to={`${match.url}/${title}`} >
                <Button variant="contained" size="medium" sx={{background:"#72a479", ":hover": {background: "#486e4d"}, zIndex: 2}}>
                  Details
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
