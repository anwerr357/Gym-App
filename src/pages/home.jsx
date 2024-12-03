import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner';
import { Box } from '@mui/material';
import  SearchExercices from '../components/searchExercices' 
import { Exercices } from '../components/Exercices';
const Home = () => {

  const [bodyPart,setBodyPart]= useState('all');
  const [exercices,setExercices] = useState([]);
  return (
    <Box>
                <HeroBanner
                setExercices = {setExercices}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                />
               <SearchExercices 
               setExercices = {setExercices}
               bodyPart={bodyPart}
               setBodyPart={setBodyPart}
               />
               <Exercices
               exercices={exercices}
               setExercices={setExercices}
               bodyPart={bodyPart}/>

    </Box>
  )
}
export default Home 