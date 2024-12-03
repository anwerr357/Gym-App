import {React,  useEffect, useState } from 'react'
import { Button, Typography, TextField,Box,Stack } from '@mui/material'
import { exerciceOptions,fetchData } from '../utils/fetchData.js';
import  HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercices = ({setExercices,bodyPart,setBodyPart }) => 
  {
    const [bodyParts , setBodyParts] = useState([]);

  useEffect(()=>
  {
    const fetchExercices = async() =>{
      const bodyPartsData  =  await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciceOptions);
      setBodyParts(['all',... bodyPartsData]);
        
    }
    fetchExercices();
  },[]);
 
 const [search,setSearch] = useState('');
 const handleSearch = async ()=>{
  if(search){
      const exercicesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000&offset=0',exerciceOptions);

      const searchedExercices = exercicesData.filter(
        (exercice) => {
          return (exercice.name?.toLowerCase().includes(search) ||
        exercice.target?.toLowerCase().includes(search)
        || exercice.equipment?.toLowerCase().includes(search)
        || exercice.bodyPart?.toLowerCase().includes(search));
        }


      );
      setSearch('');
      setExercices(searchedExercices);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    }
 }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch} >
          Search
        </Button>
      </Box>
      <Box sx = {{position : 'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar data = {bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
      </Box>
    </Stack>
  )
}

export default  SearchExercices
