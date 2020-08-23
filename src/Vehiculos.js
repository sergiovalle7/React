import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return ( 
      <div id="vehiculos"> 
    <Card className={classes.root} id="tarjeta">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://fotos.perfil.com/2019/03/29/trim/900/506/koenigsegg-jesko-653870.jpg"
          title="auto1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            El auto 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root} id="tarjeta2">
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="https://revistadiners.com.co/wp-content/uploads/2019/06/Koenigsegg_Regera_1200x800.jpg"
        title="Auto2"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          El auto 2
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          lorem jasjdakaslkdalksjdlkaja  alksdalksj ljasjdl 
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
  <Card className={classes.root} id="tarjeta3">
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image="https://static.emol.cl/emol50/Fotos/2019/01/10/file_20190110152011.jpg"
      title="auto3"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        El auto 3
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        across all continents except Antarctica
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Share
    </Button>
    <Button size="small" color="primary">
      Learn More
    </Button>
  </CardActions>
    </Card>
    </div>
  );
}
