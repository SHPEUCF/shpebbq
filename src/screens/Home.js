/* eslint-disable no-use-before-define */
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
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class Home extends React.Component {

  constructor(props) {
    super(props);
     this.state = {}
  };

  renderCard(props){
    return (
      <Card className = 'cards'>
        <CardActionArea>
          <CardMedia
            component = "img"
            alt = "Contemplative Reptile"
            image = {props.img}
            title = {props.company}
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
        <Autocomplete
          freeSolo
          id="text-input"
          disableClearable
          options={companyList.map((option) => option.company)}
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
			  <Grid container className = 'layout'>
          {companyList.map((companys) => 
           <Card className = 'cards'
            key={companys.id}>
              <CardActionArea>
                <CardMedia
                  component = "img"
                  alt = {companys.company}
                  image = { companys.img }
                  title = {companys.company}
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
          )};
        </Grid>
		  </div>
	  );
  }
}

const companyList = [
  {company: "Google", img: 'https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg', id: 1},
  {company: "Facebook", img: "https://cdn.vox-cdn.com/thumbor/o1bPD39n-_L9gQJrc20Zk-v1G0M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19345388/Wordmark_Blue_Grey.jpg", id: 2},
  {company: "Northrop Grumman", img: "https://bloximages.newyork1.vip.townnews.com/djournal.com/content/tncms/assets/v3/editorial/8/1a/81a52571-11c3-5837-a507-67073c0eda99/5e272f0368b5e.image.jpg?resize=737%2C492", id: 3},
  {company: "Mircosoft", img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2r0Th?ver=5b7d", id: 4},
  {company: "Amazon", img:"https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png", id: 5}
]

export default Home;