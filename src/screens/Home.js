/* eslint-disable no-use-before-define */
import React from 'react';
import './screens.css';
import { mondayData, tuesdayData } from '../data/companies';
import { companyData } from '../data/companiesData';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
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
  Typography,
  TextField
} from '@material-ui/core';


class Home extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    show : false,
    currCompany: "",
    day: "monday",
    image: "",
  }
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
} 

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

  showModal = (bool, companyName, day) => {
    let img;
    companyData.map(company => {
      if (this.state.currCompany === company.name) {
        img = company.img;
      }
    });
    this.setState({
      currCompany: companyName,
      show: bool,
      day: day,
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
                  return <img style={{
                    height: '300px', 
                    width: '100%' 
                    }} src={company.img} />;
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

  renderMonday(props){
    return (
      <Grid container className = 'layout'>
          {mondayData.map((company) => 
           <Card className = 'cards'
            key={ company.id }>
              <CardActionArea onClick={() => this.showModal(true, company.name, "monday")}>
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

  renderTuesday(props){
    return (
      <Grid container className = 'layout'>
          {tuesdayData.map((company) => 
           <Card className = 'cards'
            key={ company.id }>
              <CardActionArea onClick={() => this.showModal(true, company.name, "tuesday")} >
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
        { this.renderDialog() }
        <h1 className = "text">Monday</h1>
			    { this.renderMonday() }
        <h1 className = "text">Tuesday</h1>
			    { this.renderTuesday() }
		  </div>
	  );
  }
}

export default Home;