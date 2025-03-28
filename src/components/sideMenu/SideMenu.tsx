import { MouseEvent, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { defaultTab, pageKeysList } from 'src/constants';
import { useActiveTab } from 'src/hooks';
import { PageTypeKeys } from 'src/index.config';
import paths from 'src/routes/paths';
import { formatPageName } from 'src/utils';

const SideMenu = () => {
  const { setActiveTab } = useActiveTab();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (pageKey: PageTypeKeys) => {
    handleCloseNavMenu();
    setActiveTab(defaultTab);
    navigate(`${paths[pageKey]}`);
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
        {pageKeysList.map((pageKey) => (
          <MenuItem key={pageKey} onClick={() => handleMenuItemClick(pageKey)}>
            <Typography sx={{ textAlign: 'center' }}>
              {formatPageName(pageKey)}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SideMenu;
