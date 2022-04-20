import React, { useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import axios from 'axios'



const Homepage = () => {

  const getAllItems = () => {
    axios.get('/api/items/get-all-items')
    .then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getAllItems()
  }, [])
    

  return (
    <DefaultLayout>
        
    </DefaultLayout>
  )
}

export default Homepage