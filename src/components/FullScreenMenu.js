import React from 'react';
import styled from 'styled-components'
import { Link } from '@reach/router'

import {
  Dialog,
  Button,
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  Slide,
} from '@material-ui/core'

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import {
  Close as CloseIcon,
  Menu as MenuIcon,
} from '@material-ui/icons'

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
}

const MobileItem = styled.a`
  font-size: 20px;
  text-align: center;
  color: #333333;
`

const MobileButton = styled.button`
  padding: 8px;
  margin-right: 40px;
`

class FullScreenMenu extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {paths} = this.props;
    return (
      <div>
        <MobileButton as={Button} variant="outlined" size="small" onClick={this.handleClickOpen} >
          <MenuIcon />
        </MobileButton>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <Toolbar style={{display: "flex", justifyContent: "flex-end"}}>
            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <List>
            {
              paths.map((link, key) => {
                const {path, text} = link;
                return (
                  <MobileItem key={key} as={Link} to={path} >
                    <ListItem onClick={this.handleClose} button>
                      <ListItemText primary={text} disableTypography={true} />
                    </ListItem>
                  </MobileItem>
                )
              })
            }
          </List>
        </Dialog>
      </div>
    );
  }
}

export default FullScreenMenu;
