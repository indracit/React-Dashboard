import {ColorModeContext,useMode} from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import {Routes,Route} from "react-router-dom";
import Topbar from './scenes/global/Topbar';
import SideBar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team/index';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts/index';
import Form from './scenes/form/index';
import Bar from './scenes/bar/index';
import Line from './scenes/line/index';
import Pie from './scenes/pie/index';
import FAQ from './scenes/faq/index';
import Calender from './scenes/calender/calender';
import Geography from './scenes/geography/index';

function App() {
   const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
     <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="App" style={{display : 'flex'}}>
      <SideBar/>
      <main className='content'>
         <Topbar/>
         <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/invoices' element={<Invoices/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/bar' element={<Bar/>}/>
          <Route path='/pie' element={<Pie/>}/>
          <Route path='/line' element={<Line/>}/>
          <Route path='/faq' element={<FAQ/>}/> 
          <Route path='/geography' element={<Geography/>}/> 
          <Route path='/calender' element={<Calender/>}/> 
         </Routes>

         </main>
    </div>
     </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
