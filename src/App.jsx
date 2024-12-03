import './App.css'
import {Box} from "@mui/material";
import { Route, Routes} from 'react-router-dom';
import ExerciceDetail from './pages/exerciceDetail';
import Home from './pages/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { SharedExerciseProvider } from './utils/SharedExerciseContext';
function App() {
return (
  <SharedExerciseProvider>

      <Box width="400px" sx={{width : {xl:'1488px'}}} m="auto" > 
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} / >
                <Route path="/exercice/:id" element={<ExerciceDetail/>} / >
            </Routes>
            <Footer/>
        </Box>
    </SharedExerciseProvider>

  )   
}

export default App
