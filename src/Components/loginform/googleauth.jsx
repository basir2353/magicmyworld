import React from 'react';

const SigninGoogle = () => {
  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  if (window.location.pathname === '/auth/google/callback') {
    return (
      <div className="container mt-5">
        <h2>Handling Google Sign-in Callback</h2>
        {/* Add your callback handling logic here */}
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Sign in with Google</h2>
      <button
        className="btn btn-danger"
        onClick={handleGoogleSignIn}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SigninGoogle;