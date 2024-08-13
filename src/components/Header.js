import React, {useState} from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);
  


  const handleSignout = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      setMsg(error);
    });  
  }

  return (
    <>
    
     <div className = " absolute z-20 w-screen bg-black bg-opacity-55 flex justify-between align-middle">
      <img className = "w-48 " src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
     {user ? 
     (<div className = "flex gap-3 justify-center">
      <button className = "bg-red-500 rounded-lg p-3 h-16 mt-2 mr-2 text-white text-bold" onClick = {handleSignout}>Sign Out</button>
    </div>)
     : ''}
    </div>
    <div>
      <p className = "font-bold text-xl italic text-red-500">{msg}</p>
    </div>
    </>
   
    
  )
}

export default Header

