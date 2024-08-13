import React, {useEffect} from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from "./MainContainer"

const Browse = () => {
  const navigate = useNavigate();
const user = useSelector((store) => store.user)
   
  return (
    <div className = "bg-black">
     <Header />
     <MainContainer />
     <SecondaryContainer />
    </div>
  )
}

export default Browse
