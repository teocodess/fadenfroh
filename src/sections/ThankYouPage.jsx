import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ThankYouPage = () => {
  // Get the window size to make confetti full screen
  const { width, height } = useWindowSize();

  return (
    <div className="relative flex flex-col justify-center items-center gap-5 h-screen">
      {/* Full-screen confetti */}
      <Confetti
        width={width}
        height={height}
      />

      {/* Success message */}
      <h2 className="text-2xl font-bold text-center">
        Great, thank you for your email!
      </h2>
      <p className="text-center">
        Your email has been successfully sent.
      </p>
    </div>
  );
};

export default ThankYouPage;
