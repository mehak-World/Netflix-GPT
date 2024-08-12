import React, {useEffect} from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Browse = () => {
  const navigate = useNavigate();
const user = useSelector((store) => store.user)
console.log(user)
   
  return (
    <div>
     <Header />
    </div>
  )
}

export default Browse
