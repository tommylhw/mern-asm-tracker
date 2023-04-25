import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import HomePage from './pages/HomePage/HomePage';
import CreatePage from './pages/HomePage/AddPage/AddPage';
import Navbar from './components/Navbar/Navbar';

import { ThemeProvider } from '@mui/material';
import theme from './constant/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        

        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/add' element={<CreatePage />} />
            </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
