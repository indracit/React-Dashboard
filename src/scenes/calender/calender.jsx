import { useState } from "react";
import { Box} from "@mui/system";
import {List,ListItem,ListItemText,Typography,useTheme} from '@mui/material';
import Header from '../../components/Header';
import {tokens} from '../../theme';

const calender = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents,setCurrentEvents]=useState('');

return ( <Box m="20px">
    <Header title="CALENDER" subtitle="Full Calender Interactive Page"/>
    <Box display="flex" justifyContent="space-between">
         {/* calender sidebar */}
        <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
        <Typography variant="h5">Events</Typography>
        </Box>
        
    </Box>
</Box>
)
}

export default calender;
