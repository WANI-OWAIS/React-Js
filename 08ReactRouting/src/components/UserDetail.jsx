import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDetail() {
  const { username } = useParams(); // Get the dynamic username from URL
  const navigate = useNavigate(); // Hook to navigate back

  return (
    <div className='w-1/2 m-auto mt-10'>
      <h1 className='text-red-200 text-5xl mb-2'>User Detail</h1>
      <h1 className='text-3xl'>{username}</h1> 
      <button onClick={() => navigate(-1)} className='mt-5 text-white px-3 py-2 bg-red-500 rounded'>
        Go Back
      </button>
    </div>
  );
}

export default UserDetail;
