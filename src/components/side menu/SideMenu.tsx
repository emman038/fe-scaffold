import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { MouseEvent, useState } from 'react';

const pages = ['Products', 'Pricing', 'Blog'];

const SideMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <IconButton
        size="large"
        aria-label="side menu"
        aria-controls="side-menu"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="side-menu"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: 'block' }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SideMenu;
