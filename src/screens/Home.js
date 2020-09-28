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
 
      {/* <img id="headImg" src={require("../assets/bbqBlack.jpg")}/> */}
      <br></br>
      <br></br>
      <br></br>
      <h1>Welcome to the SHPE BBQ Website</h1>
        <h3>

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

/* Search bar needs to group up monday companies and tuesday companies
      and get centered 
*/                     
  renderSearch() {
    return(
      <div id="searchInput" >
        <AppBar
          id="appbar"
          color="inherit"
          position="fixed"
        >
          <Toolbar>
            <div id="searchInput" >
            <img id="pic" src={require("../assets/shpelogo.png")} />
              <TextField
                id = "serach"
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
    let filterComanies = mondayData.filter(company => {
      return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <Grid container className = 'layout'>
          {
            filterComanies.map((company) => 
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
    let filterComanies = tuesdayData.filter(company => {
      return company.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    return (
      <Grid container className = 'layout'>
          {filterComanies.map((company) => 
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
        {/* <h1 className = "text">
          SHPE UCF BBQ
        </h1> */}
        { this.renderSearch() }
        { this.renderHeader() }
        { this.renderDialog() }
        {/* <h1 className = "text">Monday</h1> */}
			    { this.renderMonday() }
        {/* <h1 className = "text">Tuesday</h1> */}
			    {/* { this.renderTuesday() } */}
		  </div>
	  );
  }
}

export default Home;