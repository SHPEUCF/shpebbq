/* eslint-disable no-use-before-define */
import React from 'react';
import './screens.css';
import { mondayData, tuesdayData } from '../data/companies';
import { companyData } from '../data/companiesData';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  AppBar,
  Avatar,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Icon,
  Typography,
  Toolbar,
  Tooltip,
  TextField
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


class Home extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    show : false,
    currCompany: "",
    image: "",
    search: "",
  }
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
} 

renderHeader() {
  return (
    <div id="header">
      <br></br>
      <br></br>
      <br></br>
      <h1>Welcome to the SHPE BBQ Website</h1>
        <h3>
          'Cause I-I-I'm in the stars tonight
          So watch me bring the fire and set the night alight (hey)
          Shining through the city with a little funk and soul
          So I'ma light it up like dynamite, whoa
          This is getting heavy
          Can you hear the bass boom? I'm ready (woo hoo)
          Life is sweet as honey
          Yeah, this beat cha-ching like money
          Disco overload, I'm into that, I'm good to go
          I'm diamond, you know I glow up
          Let's go
          'Cause I-I-I'm in the stars tonight
          So watch me bring the fire and set the night alight (hey)
          Shining through the city with a little funk and soul
          So I'ma light it up like dynamite, whoa
          Dy-na-na-na, na-na, na-na-na, na-na, life is dynamite
          Dy-na-na-na, na-na, na-na-na, na-na, life is dynamite
          Shining through the city with a little funk and soul
          So I'ma light it up like dynamite, whoa
          Dy-na-na-na, na-na, na-na, ayy
          Dy-na-na-na, na-na, na-na, ayy
          Dy-na-na-na, na-na, na-na, ayy
          Light it up like dynamite
        </h3>
        <Tooltip title="Click me to watch a quick onboarding video on how to use our site.">
        {/* put shpe onboarding vid were the youtube home page link is */}
          <Button 
            color="inherit" 
            onClick={() => {window.open('https://www.youtube.com/watch?v=gdZLi9oWNZg&ab_channel=BigHitLabels', "_blank")}}
          >
          Onboarding Video</Button>
        </Tooltip>
    </div>
  )
}

  handleSearchChange = async (e)  => {
    // console.log(e.target.value);
    await this.setState({search: e.target.value});
  }
                   
  renderSearch() {
    return(
      <div id="searchInput" >
        <AppBar
          color="inherit"
          position="fixed"
        >
          <Toolbar>
            <div id="searchInput" >
            <img id="pic" src={require("../assets/shpelogo.png")} />
              <TextField
                id = "search"
                label="Search a Company"
                type="text"
                variant="standard"
                onChange={(e) => this.handleSearchChange(e)}
                value={this.state.search}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }


  showModal = (bool, companyName) => {
    let img;
    companyData.map(company => {
      if (this.state.currCompany === company.name) {
        img = company.img;
      }
    });
    this.setState({
      currCompany: companyName,
      show: bool,
      image: img,
    });
  };

  hideModal = (val) => {
    this.setState({
      show: val
    });
  };

  getZoomLink = (e) => {
    e.preventDefault();
    let ref;
    companyData.map(company => {
      if (this.state.currCompany === company.name) {
        ref = company.zoomLink;
      }
    });
    window.open(ref, "_blank");
  }

  getCareersLink = (e) => {
    e.preventDefault();
    let ref;
    companyData.map(company => {
      if (this.state.currCompany === company.name) {
        ref = company.link;
      }
    });
    window.open(ref, "_blank");
  }

  renderDialog(prop) {
    return (
      <div>
        <Dialog
          open={this.state.show}
          onClose={() => this.hideModal(false)}
        >
          {/* <DialogTitle>{this.state.currCompany}</DialogTitle> */}
          <DialogTitle>
            {
              companyData.map(company => {
                if (this.state.currCompany === company.name) {
                  return company.title;
                }
              })
            }
          </DialogTitle>
          <DialogContent>
          <DialogContent>
              {
              companyData.map(company => {
                if (this.state.currCompany === company.name) {
                  return <img id="img" src={company.img} />;
                }
              })
            }
            </DialogContent>
            <DialogContentText>
              {
                companyData.map(company => {
                  if (this.state.currCompany === company.name) {
                    return company.desc;
                  }
                })
              }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button size="small" color="primary" onClick={(e) => this.getCareersLink(e)}>
                    Careers
            </Button>
            <Button size="small" color="primary" onClick={(e) => this.getZoomLink(e)}>
                    Join Zoom
            </Button>
            <Button size="small" color="primary" onClick={() => this.hideModal(false)}>
                  Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  renderMonday(props) {
    let filterCompanies = mondayData.filter(company => {
      return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <Grid container className = 'layout'>
          {
            filterCompanies.map((company) => 
              <Card className = 'cards'
                key={ company.id }>
                  <CardActionArea onClick={() => this.showModal(true, company.name)}>
                    <CardMedia
                      component = "img"
                      alt = { company.name }
                      image = { company.img }
                      title = { company.name }
                      
                    />
                    <CardContent  >
                      <Typography variant="body1" color="textSecondary" component="p">
                      { company.desc }
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
          )};
        </Grid>
    );
  }

  renderTuesday(props) {
    let filterCompanies = tuesdayData.filter(company => {
      return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <Grid container className = 'layout'>
          {filterCompanies.map((company) => 
           <Card className = 'cards'
            key={ company.id }>
              <CardActionArea onClick={() => this.showModal(true, company.name)} >
                <CardMedia
                  component = "img"
                  alt = { company.name }s
                  image = { company.img }
                  title = { company.name }
                />
                <CardContent>
                  <Typography variant="body1" color="textSecondary" component="p">
                  { company.desc }
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )};
        </Grid>
    );
  }



  render() {
	  return(
		  <div id = "home">
        { this.renderSearch() }
        { this.renderHeader() }
        { this.renderDialog() }
        { this.renderMonday() }
        { this.renderTuesday() }
		  </div>
	  );
  }
}

export default Home;