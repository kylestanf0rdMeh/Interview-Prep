import React, { useState, useEffect } from 'react';
import { fetchApiData } from './practice.middleware';

// Main component for the practice exercise
function PracticeExercise() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  const getThisData = async () => {
    try {
      const apiData = await fetchApiData();
      setData(apiData);
    } catch (error) {
      setError(`An error occurred while fetching data: ${error.message}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getThisData();
  }, []);

  // TODO: Implement a function to render the fetched data
  const renderData = () => {
    // Return JSX to display the fetched data
  };

  return (
    <div className="practice-exercise">
      <h1>HackerRank-style Practice Exercise</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && renderData()}
    </div>
  );
}

export default PracticeExercise;

// TODO: Implement any additional components or helper functions as needed