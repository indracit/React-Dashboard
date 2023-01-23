import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { tokens } from "../../theme";
import {Box,Button} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import user from '../../assets/user.jpg';
import {Link} from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>

      <CssBaseline />
      <Drawer variant="permanent" 
        open={open} 
        PaperProps={{
          sx: {backgroundColor : colors.primary[400]}
          }}>  
        <DrawerHeader>
          {open && (<Typography  mr='auto' variant="h3" ml={0} 
          // sx={{transition:trans(theme)}}
           >LOGO</Typography>)}
          {open ? ( 
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          ) : (
          <IconButton onClick={handleDrawerOpen} sx={{margin:'11px'}}>
            <MenuOutlinedIcon/>
          </IconButton>)
          }
        </DrawerHeader>
        <Divider />
          {open && (
            <Box mb="25px" mt="25px" 
            // sx={{transition:trans(theme)}} 
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={user}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Indrajith S
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>Admin</Typography>
              </Box>
            </Box>
          )}
      
      
        <Box display='flex' 
        flexDirection= 'column'
        alignSelf='center' 
        alignItems='flex-start'
        // sx={{transition:trans(theme)}} 
        >
        <Button 
        sx={{color : colors.grey[100], margin:'4px',textTransform: 'none' ,fontSize : theme.typography.h6 }}
        
        startIcon={<HomeOutlinedIcon />} component={Link} to="/"
        >
          {open && 'Dashboard'}
        </Button>

        { open &&  <Typography mt='15px' fontSize ={ theme.typography.h5}>Data</Typography>}

        <Button sx={{color : colors.grey[100], margin:'4px',textTransform: 'none',fontSize : theme.typography.h6}} 
          startIcon={<GroupOutlinedIcon />} component={Link} to="/team"
        >
          {open && ' Manage Team'}
        </Button>
        
        <Button sx={{color : colors.grey[100], margin:'4px' ,textTransform: 'none',fontSize : theme.typography.h6}} 
          startIcon={<ContactsOutlinedIcon />} component={Link} to="/contacts"
        >
          {open && 'Contacts Information'}
        </Button>
        <Button sx={{color : colors.grey[100], margin:'4px' ,textTransform: 'none',fontSize : theme.typography.h6}} 
          startIcon={<ReceiptOutlinedIcon />} component={Link} to="/invoices"
        >
          {open && 'Invoices Balances'}
        </Button>
        {open &&<Typography mt='15px' fontSize ={ theme.typography.h5}>Pages</Typography>}    
        <Button sx={{color : colors.grey[100], margin:'4px',textTransform: 'none',fontSize : theme.typography.h6}} 
          startIcon={<PersonOutlinedIcon />} component={Link} to="/form"
        >
          {open && ' Profile Form'}
        </Button>
        <Button sx={{color : colors.grey[100], margin:'4px' ,textTransform: 'none',fontSize : theme.typography.h6}} 
          startIcon={<CalendarTodayOutlinedIcon />} component={Link} to="/calender"
        >
          {open && ' Calender'}
        </Button>
        <Button sx={{color : colors.grey[100], margin:'4px' ,textTransform: 'none',fontSize : theme.typography.h6}}
          startIcon={<HelpOutlinedIcon />} component={Link} to="/"
          >
          {open && ' FAQ Page'}
        </Button>
        {open && <Typography mt='15px' fontSize ={ theme.typography.h5}>Charts</Typography>} 
        <Button sx={{color : colors.grey[100], margin:'4px' ,textTransform: 'none',fontSize : theme.typography.h6}} 
          startIcon={<BarChartOutlinedIcon />} component={Link} to="/"
        >
          {open && ' Bar Chart'}
        </Button>
        <Button sx={{color : colors.grey[100], margin:'4px' ,textTransform: 'none',fontSize : theme.typography.h6}}
          startIcon={<PieChartOutlineOutlinedIcon />} component={Link} to="/"
        >
          {open && ' Pie Chart'}
        </Button>
        <Button sx={{color : colors.grey[100], margin:'4px',textTransform: 'none',fontSize : theme.typography.h6}} 
          startIcon={<TimelineOutlinedIcon />} component={Link} to="/"
          >
          {open && 'Line Chart'}
        </Button>
        <Button sx={{color : colors.grey[100], margin:'4px',textTransform: 'none',fontSize : theme.typography.h6}} 
        startIcon={<MapOutlinedIcon />} component={Link} to="/"
        >
          {open && 'Geography Chart'}    
        </Button>
        
        </Box>
      </Drawer>
      
    </Box>
  );
}



