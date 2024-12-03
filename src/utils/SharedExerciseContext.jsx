// SharedExerciseContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const SharedExerciseContext = createContext();

// Create the provider
export const SharedExerciseProvider = ({ children }) => {
  const [sharedExercise, setSharedExercise] = useState('No Data Found!');

  return (
    <SharedExerciseContext.Provider value={{ sharedExercise, setSharedExercise }}>
      {children}
    </SharedExerciseContext.Provider>
  );
};

// Create a custom hook to use the context
export const useSharedExercise = () => {
  const context = useContext(SharedExerciseContext);
  if (!context) {
    throw new Error('useSharedExercise must be used within a SharedExerciseProvider');
  }
  return context;
};
