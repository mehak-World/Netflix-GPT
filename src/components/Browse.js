import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from "./MainContainer";
import GptSearch from './GptSearch';

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div className="bg-black">
      {showGPTSearch && (
        <div>
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/813635c2-ab2e-416f-aca0-2fe712618ed4/CA-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_9148549a-7358-4ba2-93c6-b061d704ac8e_large.jpg"
            alt="background-image"
          />
          
          {/* Black Overlay */}
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-30 z-10"></div>
        </div>
      )}

      <Header videoComp = {false}/>

      {!showGPTSearch && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {showGPTSearch && <GptSearch />}
    </div>
  );
};

export default Browse;
