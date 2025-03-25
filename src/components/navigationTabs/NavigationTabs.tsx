import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { tabOptions } from 'src/constants';
import { useActiveTab } from 'src/hooks';

const NavigationTabs = () => {
  const { activeTab, setActiveTab } = useActiveTab();

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 2,
        justifyContent: 'center',
        mx: '0.25rem',
      }}
    >
      {tabOptions.map((tabOption) => (
        <Button
          onClick={() => {
            setActiveTab(tabOption);
          }}
          key={tabOption}
          sx={{
            color: 'white',
            borderRadius: 0,
            mx: '0.5rem',
            position: 'relative',
          }}
        >
          {activeTab === tabOption && (
            <Box
              component="span"
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50%',
                height: '0.125rem',
                backgroundColor: 'white',
              }}
            />
          )}
          {tabOption}
        </Button>
      ))}
    </Box>
  );
};

export default NavigationTabs;
