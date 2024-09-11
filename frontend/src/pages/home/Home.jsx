/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useRef } from 'react'
import { mainContext } from '../../context/MainProvider'






const Home = () => {
const formRef= useRef()
const { addBlogPost, blogs} = useContext(mainContext)

const handleSubmit = async (event) =>{
  event.preventDefault()
  const formData = new FormData(formRef.current)
  await addBlogPost(formData)
  formRef.current.reset()
}
  return (
    <>
    <h1>basic_db_connection_test</h1>
    <form ref={formRef}>
        <input type="text" name='surename' placeholder='name'/>
        <input type="text" name='lastname' placeholder='lastname'/>
        <input type="email" name='email' placeholder='email'/>
        <input type="text" name='message' placeholder='type your message'/>
        <button onClick={handleSubmit}>post_it</button>
    </form>

    <h6>2024_michaelsuperCode_revised_&#9825_version</h6>


    </>
  )
}

export default Home