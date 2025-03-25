import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import NavigationTabs from '../navigationTabs';
import SideMenu from '../side menu';
import UserMenu from '../userMenu';

function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: '0.5rem',
        left: '0.5rem',
        right: '0.5rem',
        width: 'calc(100% - 1rem)',
        borderRadius: '10px',
      }}
    >
      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <Toolbar disableGutters sx={{ width: '100%' }}>
          <SideMenu />
          <NavigationTabs />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
