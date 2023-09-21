import styles from './HeaderSite.module.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState} from 'react';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Link from 'next/link';
import Menu from './Menu';
import Image from 'next/image';

const drawerWidth = 240;
const navItems = ['Home', 'sobre', 'calculadora','contato'];

function DrawerAppBar(props, {handleDrawerToggle, mobileOpen=false}) {
  const { window } = props;


  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      
      <AppBar component="nav" style={{backgroundColor: 'white', color: 'black'}}>
        <div style={{height: '15px', backgroundColor: 'lightgray', width: '100%'}}></div>
        <Toolbar>

          <div className={styles.menu}><Menu /></div>

                  <Image
      src="/img/bombadegasolina.png"
                    height={35}
                    width={35}
            

      alt="completa"
    />

         
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', ml:1,flexDirection: 'column' }}
          >
             
            <div>Calculadora</div>
            <div style={{fontSize: '13px', marginTop: '-8px', marginLeft: '3px'}}>para combustível</div>
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item,index) => (
              <Link href={item=='Home'?'/':item=='calculadora'?'/#calculadora':item} style={{textDecoration: 'none'}} key={index}><Button sx={{ color: 'black' }} >
                {item}
              </Button></Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

        <Toolbar />
        
      </Box>
   
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;