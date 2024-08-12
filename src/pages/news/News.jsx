import React, { useState } from 'react'
import { handleSubmit } from '../../redux/news/NewsSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const News = () => {
   
  const dispatch = useDispatch()
   const navigate = useNavigate()
  const [inputData, setInputData] = useState ({
   title: "",
   department : "" ,
   locationType: "",
   postionType: "",
   email: "",
  })
  const handleSubmiForm = (event) => {
    event.preventDefault()
      dispatch(handleSubmit(inputData))
       navigate("/")
       alert("data added sucessfully")
  }
 
  return (
   <form onSubmit={handleSubmiForm}>
   <input type="text" placeholder='title' onChange={(event) => {setInputData({...inputData, title: event.target.value})}} />
    <input type='text' placeholder='department' onChange={(event) => {setInputData({...inputData, department: event.target.value})}} />
    <input type="text" placeholder='location' onChange={(event) => {setInputData({...inputData, locationType: event.target.value})}} />
    <input type="text" placeholder='postion' onChange={(event) => {setInputData({...inputData, postionType: event.target.value})}} />
    <input type="text" placeholder='email' onChange={(event) => {setInputData({...inputData, email: event.target.value})}} />

     <button>submit</button>
   </form>
   
  )
}

export default News