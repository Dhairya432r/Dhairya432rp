import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const Loader2 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async task (e.g., fetching data) with a setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        // Your content when loading is complete
        <div>
            
          {/* Your data rendering goes here */}
        </div>
      )}
    </div>
  );
}

export default Loader2;
