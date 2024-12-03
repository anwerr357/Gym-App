import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciceOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import SimilairExercices from '../components/SimilarExercices';
import ExerciceVideos from '../components/ExerciceVideos';
import Detail from '../components/Detail';
import { useSharedExercise } from '../utils/SharedExerciseContext';

const ExerciceDetail = () => {
  const [exerciceDetail, setExerciceDetail] = useState({});
 const[targetMuscleExercisesData,setTargetMuscleExercises] = useState([]);
  const [equipmentExercises,setEquipmentExercises]=useState([]);
  const [exercicseVideos, setExercicseVideos] = useState({});
  const { sharedExercise } = useSharedExercise();
  const {id} = useParams();
  console.log("salemmm" , id);

  useEffect(() => {
      const fetchExercicesData = async () => {
      
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


      const exerciceDetailData =  await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciceOptions);;
      setExerciceDetail(exerciceDetailData);
      console.log("exercice detaille" ,sharedExercise);

      const exercisevideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciceDetailData?.name} exercise`, youtubeOptions);
      setExercicseVideos(exercisevideosData.contents);


      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciceDetailData?.target}`, exerciceOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciceDetailData?.equipment}`, exerciceOptions);
      setEquipmentExercises(equimentExercisesData);


    };
    fetchExercicesData();
  }, [id]);

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
    {sharedExercise ? (
      <>
        
        <Detail exerciceDetail={exerciceDetail} />
           <ExerciceVideos exerciseVideos= {exercicseVideos} name={exerciceDetail.name}/>
        <SimilairExercices targetMuscleExercisesData={targetMuscleExercisesData} equimentExercisesData={equipmentExercises} />
     
      </>
    ) : (
      <p>No exercise selected</p>
    )}
  </Box>
  );
};

export default ExerciceDetail;
