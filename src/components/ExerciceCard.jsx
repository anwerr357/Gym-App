import React from 'react'
import {Link } from 'react-router-dom';
import {Button , Stack,Typography} from '@mui/material';
import { useSharedExercise } from '../utils/SharedExerciseContext';

const ExerciceCard = ({exercice}) => {
  const { sharedExercise, setSharedExercise } = useSharedExercise();
  return (    
    <Link className="exercise-card" to={`/exercice/${exercice?.id}`}
    onClick={() => {
      setSharedExercise(exercice);
   
    }}
    >
    <img src={exercice?.gifUrl} alt={exercice?.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercice?.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercice?.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercice?.name}
    </Typography>
  </Link>

   

  )
}

export default ExerciceCard