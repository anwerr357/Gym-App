import React, {useEffect,useState} from 'react'
import  Pagination  from '@mui/material/Pagination'
import {Box , Stack, Typography} from  '@mui/material/'
import ExerciceCard from './ExerciceCard'
import { exerciceOptions,fetchData } from '../utils/fetchData.js'
export const Exercices = ({exercices , setExercices,bodyPart}) => {
  const[currentPage , setcurrentPage]= useState(1);
  const pageSize = 9;
  const indexOfLastExercice = currentPage *  pageSize;
  const indexOfFirstExercice = indexOfLastExercice-pageSize;
  const currentExercices = exercices.slice(indexOfFirstExercice,indexOfLastExercice); 
  const paginate = (e,value)=>{
      setcurrentPage(value);
      window.scrollTo({top:1800,behavior:'smooth'}); 
  }
    useEffect(() => {
        const fetchExercisesData = async () => {
          let exercisesData = [];
    
          if (bodyPart === 'all') {
            exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000&offset=0', exerciceOptions);
          } else {
            exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000&offset=0`, exerciceOptions);
          }   
          setExercices(exercisesData);
        };
        fetchExercisesData();
    }, [bodyPart]);
  return (
     <Box id='exercices'
        sx={{mt:{lg:'110px'}}}  
        mt='50px'
        p='20px'    
    >
        <Typography variant='h3' mb='46px'>
            Showing Results
        </Typography>
        <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      
            {
              
                currentExercices.map((exercice,index)=>(
                  
                    <ExerciceCard key={index} exercice={exercice} />
                ))
            }
        </Stack>
          <Stack mt='100px' alignItems='center'>
              {
                exercices.length>pageSize&&  (
                  <Pagination
                    color="standard"
                    shape="rounded"
                    count = {Math.ceil(exercices.length/pageSize)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"
                  />
                )
              }
          </Stack>
    </Box>
  )
}
