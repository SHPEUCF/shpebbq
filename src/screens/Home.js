import React from 'react';
import './screens.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Home extends React.Component {

  constructor(props) {
    super(props);
     this.state = {}
  };

  renderCard(){
    return (
      <Card className = 'cards'>
        <CardActionArea>
          <CardMedia
            component = "img"
            alt = "Contemplative Reptile"
            image = { require('../assets/google.jpg') }
            title = "Google"
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
            Help us create, design, code, and build for everyone. Build what's next. Grow your career. 
            Learn about open roles.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="linkText">
          <Button size="small" color="primary" onClick={() => alert("No❤️")}>
            Join Zoom
          </Button>
        </CardActions>
      </Card>
    );
  }

  render(){
	  return(
		  <div id = "home">
        <h1 className = "text">
          SHPEBBQ
        </h1>
			  <Grid container className = 'layout'>
          { this.renderCard() }
          { this.renderCard() }
          { this.renderCard() }
          { this.renderCard() }
          { this.renderCard() }
          { this.renderCard() }
          { this.renderCard() }
          { this.renderCard() }
          { this.renderCard() }
        </Grid>
		  </div>
	  );
  }
}

export default Home;