// import React, { useState } from 'react';
// import Customers from './components/customers';
// import Policies from './components/policies';
// import Claims from './components/claims';
// import { AppBar, Tabs, Tab, Box } from '@mui/material';

// function App() {
//   const [tab, setTab] = useState(0);

//   return (
//     <div>
//       <AppBar position="static">
//         <Tabs value={tab} onChange={(e, val) => setTab(val)}>
//           <Tab label="Customers" />
//           <Tab label="Policies" />
//           <Tab label="Claims" />
//         </Tabs>
//       </AppBar>

//       <Box p={2}>
//         {tab === 0 && <Customers />}
//         {tab === 1 && <Policies />}
//         {tab === 2 && <Claims />}
//       </Box>
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Customers from './components/customers';
import Policies from './components/policies';
import Claims from './components/claims';

const activeStyle = {
  backgroundColor: '#ffffffaa',
  fontWeight: 'bold',
  color: 'black'
};

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button component={NavLink} to="/customers" 
                  color="inherit"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}>Customers</Button>
          <Button component={NavLink} to="/policies" 
                  color="inherit"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}>Policies</Button>
          <Button component={NavLink} to="/claims" 
                  color="inherit"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}>Claims</Button>
        </Toolbar>
      </AppBar>
      <Box p={2}>
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/claims" element={<Claims />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
