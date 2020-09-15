/* eslint-disable no-use-before-define */
import React from 'react';
import './screens.css';
import { mondayData, tuesdayData } from '../data/companies';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField
} from '@material-ui/core';

class Home extends React.Component {
/* Search bar needs to group up monday companies and tuesday companies
      and get centered 
                       
  renderSearch(){
    return(
      <Autocomplete
        freeSolo
        id="text-input"
        style={{ width: 1000 }}
        disableClearable
        options={mondayData.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a company"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    );
  }
*/
  renderMonday(props){
    return (
      <Grid container className = 'layout'>
          {mondayData.map((company) => 
           <Card className = 'cards'
            key={ company.id }>
              <CardActionArea>
                <CardMedia
                  component = "img"
                  alt = { company.name }
                  image = { company.img }
                  title = { company.name }
                />
                <CardContent>
                  <Typography variant="body1" color="textSecondary" component="p">
                  { company.desc }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="linkText">
                <Button size="small" color="primary" onClick={() => alert("Not Available")}>
                  Join Zoom
                </Button>
              </CardActions>
            </Card>
          )};
        </Grid>
    );
  }

  renderTuesday(props){
    return (
      <Grid container className = 'layout'>
          {tuesdayData.map((company) => 
           <Card className = 'cards'
            key={ company.id }>
              <CardActionArea>
                <CardMedia
                  component = "img"
                  alt = { company.name }
                  image = { company.img }
                  title = { company.name }
                />
                <CardContent>
                  <Typography variant="body1" color="textSecondary" component="p">
                  { company.desc }
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="linkText">
                <Button size="small" color="primary" onClick={() => alert("No❤️")}>
                  Join Zoom
                </Button>
              </CardActions>
            </Card>
          )};
        </Grid>
    );
  }



  render(){
	  return(
		  <div id = "home">
        <h1 className = "text">
          SHPE UCF BBQ
        </h1>
        {/* this.renderSearch() */}
        <h1 className = "text">Monday</h1>
			    { this.renderMonday() }
        <h1 className = "text">Tuesday</h1>
			    { this.renderTuesday() }
		  </div>
	  );
  }
}

export default Home;