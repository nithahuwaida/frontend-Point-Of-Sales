import React from 'react';
import {Link, Route} from 'react-router-dom';
import logoImg from './logo.png';
import Cart from '../Contents/Cart';
import Report from '../Contents/Report';
import MasterData from '../Contents/MasterData/MasterData';
import Setting from '../Contents/User/Setting';
import Logout from '../LoginRegister/Logout';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight : "-webkit-fill-available",
    backgroundColor : "white"
  },
  p:{
    margin: "auto",
    paddingTop: "10px",
    paddingLeft: "5px",
    fontSize: "30px",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#963d3d",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgrounColor:"indianred",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,

    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{margin:"auto",display:"flex"}}>
          <img src={logoImg} alt="Logo" style={{width:"50px", height: "40px"}}/>
            <p className={classes.p}>MaemSek</p>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider/>
        <List>
          <Link style={{textDecoration:"none", color:"black"}} to={'/home'} activeStyle={{BackgroundColor:'red'}} >
              <ListItem button>
                <ListItemIcon><Icon>store</Icon></ListItemIcon>
                <ListItemText primary="Store" />
              </ListItem>
          </Link>
            <Divider/>
          <Link style={{textDecoration:"none", color:"black"}} to={'/report'} activeStyle={{BackgroundColor:'red'}} >
            <ListItem button>
              <ListItemIcon><Icon>event-note</Icon></ListItemIcon>
              <ListItemText primary="Report"/>
            </ListItem>
          </Link>
          <Link style={{textDecoration:"none", color:"black"}} to={'/masterdata'} activeStyle={{BackgroundColor:'red'}} >
            <ListItem button>
              <ListItemIcon><Icon>inbox</Icon></ListItemIcon>
              <ListItemText primary ="Master Data"/>
            </ListItem>
          </Link>
          <Link style={{textDecoration:"none", color:"black"}} to={'/accountsetting'} activeStyle={{BackgroundColor:'red'}} >
            <ListItem button>
              <ListItemIcon><Icon>settings_applications</Icon></ListItemIcon>
              <ListItemText primary="Account & Settings"/>
            </ListItem>
            <Divider/>
          </Link>
          <Logout/>
          <Divider />        
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
            <Route exact path='/home' component={Cart} />
            <Route path="/report" component={Report}/>
            <Route path="/masterdata" component={MasterData}/>
            <Route path="/accountsetting" component={Setting}/>
        </Typography>       
      </main>
    </div>
  );
}