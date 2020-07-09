import React, { Component } from 'react'
import proptypes from 'prop-types'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import Face from '@material-ui/icons/FavoriteSharp';


class ImageResults extends Component {
    state = {
        open: false,
        currentImage :'' ,
        title : ''
    }

    handleClickOpen = (img , title) => {
        this.setState({ open: true ,currentImage : img , title });
    }
    
    handleClose = () => {
       this.setState({ open: false ,currentImage :'' , title:'' });
    }
    
    render() {
        let imageListContent ;
        const { images } = this.props ;

        if(images){

            imageListContent= ( <div className='f'>
                <GridList cellHeight={180} className='rr'>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">December</ListSubheader>
                    </GridListTile>
                     {images.map(img => (
                       <GridListTile key={img.id}>
                         <img src={img.largeImageURL} alt={img.tags} />
                        <GridListTileBar
                        title={img.tags}
                        subtitle={<span>By<strong> {img.user} </strong> </span>}
                        actionIcon={
                         <IconButton onClick={()=>this.handleClickOpen(img.largeImageURL,img.tags)} className='ff'>
                            <Face />
                        </IconButton>
                    }
                     />
                    </GridListTile>
                 ))}
                </GridList>
            </div>)

        }else{
             imageListContent = (
                 <div>
                     <h1>pas images </h1>
                 </div>
             )
            
        }
        return (
            <div>
                { imageListContent}

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.state.title}</DialogTitle>
                    <DialogContent>
                        <img src={this.state.currentImage} style={{width:'100%' }} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        love it
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                        close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

ImageResults.prototypes = {
    images : proptypes.array.isRequired
}
export default ImageResults;
