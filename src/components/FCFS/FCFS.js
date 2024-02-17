import React, { useState } from 'react';

const ProgressBar = () => {
  // State to manage the progress value
  const [progress, setProgress] = useState(0);

  // Function to simulate progress increment
  const incrementProgress = () => {
    // Increment progress value (for demonstration purposes)
    setProgress(prevProgress => prevProgress + 10);
  };

  return (
    <div>
      {/* Progress bar */}
      <div className="progress" style={{ height: '25px', marginBottom: '0px' }}>
        {/* Dynamically set width based on progress state */}
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%`, backgroundColor: '#9adcff' }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {`${progress}%`}
        </div>
      </div>
      
      {/* Button to increment progress (for demonstration purposes) */}
      <button onClick={incrementProgress}>Increment Progress</button>
    </div>
  );
};

export default ProgressBar;


