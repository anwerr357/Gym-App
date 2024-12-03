import React from 'react'
import { Box,Typography,Stack } from '@mui/material'
import Loader from './Loader'
import HorizontalScrollbar from './HorizontalScrollbar'
const SimilairExercices = ({targetMuscleExercisesData,equimentExercisesData}) => {
  console.log('similair' , equimentExercisesData);
  return (

    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercisesData.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercisesData} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equimentExercisesData?.length !== 0 ? <HorizontalScrollbar data={equimentExercisesData} /> : <Loader />}
    </Stack>
  </Box>
  )
}

export default SimilairExercices