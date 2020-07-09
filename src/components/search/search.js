import React, { Component } from 'react'
import NavBar from '../navbar/navbar'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import SelectField from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem' 
import InputLabel from '@material-ui/core/InputLabel'
import axios from 'axios'
import ImageResults from '../images-results/imageResults'



const styles = theme => ({
    root: {
      flexGrow: 1,
    }
  });

class Search extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchText : '',
            amount : 15 ,
            apiUrl : 'https://pixabay.com/api',
            apiKey : '12129510-525047739e8eec649dc3e1832' ,
            images : [] ,
            open: false,
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
    handleClose = () => {
        this.setState({ open: false });
      }
    
    handleOpen = () => {
         this.setState({ open: true });
    }

    onTextChange = (e)=>{
        let val = e.target.value 
        this.setState({
            [e.target.name]:val
        },()=>{

            if(val === ''){
                this.setState({images:[]})
            }else{

                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&p=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res =>this.setState({images :res.data.hits}))
                .catch(err => console.error(err)) ;
            }
        });
    }

    onAmountChange = (e,index , value)=> this.setState({amount : value })
    render() {

        return (
            <div>
                <NavBar />
                <div style={{padding:25}}>
                <Grid container ={true}
                    direction="row"
                    alignItems="center" spacing={16}
                >
                    <TextField name="searchText"
                    value = {this.state.searchText}
                    onChange ={this.onTextChange} 
                    fullWidth={true} />
                   <br></br> <br/>
                   
                    <InputLabel htmlFor="demo-controlled-open-select">Choose a Amount</InputLabel><br></br> <br/>
                    <SelectField
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.amount}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'amount',
                        }}
                    >
                        <MenuItem value={5}  >5</MenuItem>
                        <MenuItem value={10} >10</MenuItem>
                        <MenuItem value={15} >15</MenuItem>
                        <MenuItem value={30} >30</MenuItem>
                        <MenuItem value={50} >50</MenuItem>

                    </SelectField>
                    <br></br><br/>
                    {/* {this.state.images.length > 0 ? <ImageResults images = {this.state.images} /> : 'rien a siganler'} */}
                    <ImageResults images = {this.state.images}></ImageResults>
                </Grid>
                
            </div>
            </div>
        );
    }
}

export default Search;
