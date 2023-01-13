import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalender/interaction';
import listPlugin from '@fullcalendar/list';
import {Box,List,ListItem,ListItemText,Typography,useTheme} from '@mui/material';
import Header from '../../components/Header';
import {tokens} from '../../theme';

const calender = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents,setCurrentEvents]=useState('');

    const handleDateClick = (selected) =>{
        
        const title = prompt("Please enter a new title for your event");
        const calenderApi = selected.view.calender;
        calenderApi.unselect();
        if(title) {
            calenderApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end : selected.endStr,
                allDay : selected.allDay
            })
        }

    }
    const handleEventClick = (selected)=>{
        if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`))
        {
            selected.event.remove();
        }
    }


return ( <Box m="20px">
    <Header title="CALENDER" subtitle="Full Calender Interactive Page"/>
    <Box display="flex" justifyContent="space-between">
         {/* calender sidebar */}
         <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">

         </Box>


    </Box>
</Box>
)
}

export default calender
