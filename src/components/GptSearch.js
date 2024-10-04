import React from 'react'
import { useRef } from 'react';
import client from "../utils/openAI"

const GptSearch = () => {
    const searchTxt = useRef(null);

    const fetchResponse = async (searchvalue) => {
        const queryString = "Please act as the movie recommendation system with movies that satisfy the following: " + searchvalue+ ".Give me the names of five movies"
        const chatCompletion = await client.chat.completions.create({
            messages: [{ role: 'user', content: queryString }],
            model: 'gpt-3.5-turbo',
          });
        return chatCompletion.choices;
    }

    const handleGPTSearch = async () => {
        console.log("clicked")
        const valueToSearch = searchTxt.current.value;
        console.log(valueToSearch)
        const result = await fetchResponse(valueToSearch);
        console.log(result);
    }

  return (
    <div className = "z-50 absolute top-44 left-1/3">
      <input type = "text" ref = {searchTxt} className = "w-96 p-3 rounded-lg" placeholder = "What would you like to watch today?" />
      <button className = "bg-red-500 text-white rounded-lg p-3 ml-2" onClick = {handleGPTSearch}>Search</button>
    </div>
  )
}

export default GptSearch
