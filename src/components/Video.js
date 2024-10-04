import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { fetchData } from '../hooks/useMainMovie'
import VideoBackground from './VideoBackground';
import Shimmer from './Shimmer';
import Header from './Header';
import VideoTitle from './VideoTitle';

const Video = () => {
  const { id } = useParams();
    const location = useLocation();
    console.log(location.state);
    const state = location.state;
    const {original_title, overview} = state;

  const [videoLink, setVideoLink] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(id);
      setVideoLink(data);
    }
    getData();
  }, [id]);

  return !videoLink ? <Shimmer /> : (
    <div className = "bg-black">
        <Header videoComp = {true}/>
      <VideoBackground movie={videoLink} />
      <div className = "text-white m-4 p-4">
            <h2 className = "text-3xl mb-5">{original_title}</h2>
            <h4>{overview}</h4>
      </div>
    </div>
  );
}

export default Video;
