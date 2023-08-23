import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';
import Link from 'next/link';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        title="Menu"
      >
        <MenuIcon style={{color: 'black'}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none'}} href='/'>HOME</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none'}} href='/sobre'>SOBRE</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none'}} href='/#calculadora'>CALCULADORA</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none'}} href='/blog'>BLOG</Link></MenuItem>
      </Menu>
    </div>
  );
}