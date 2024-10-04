import React, {useState} from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';
import { toggleGPTSearch } from '../utils/gptSlice';
import { Link } from 'react-router-dom';

const Header = ({videoComp}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        
        dispatch(addUser({ uid, email, displayName, photoURL }));
        
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

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch())
  }

  return (
    <>
     <div className = " absolute z-20 w-full bg-black bg-opacity-30 flex justify-between align-middle">
      <img className = "w-48 " src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
     {user ? 
     (<div className = "flex gap-3 justify-center">
      {!videoComp &&  showGPTSearch && <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick = {handleGPTSearch}
          >Homepage</button>}
     {videoComp && <Link to = "/browse"><p className = "text-xl rounded-lg px-4 mx-4 my-2 bg-purple-800 py-2 text-white">Homepage</p></Link>}
          <img
            className="hidden md:block w-10 h-10 mt-2 rounded-lg"
            alt="usericon"
            src={USER_AVATAR}
          />
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

