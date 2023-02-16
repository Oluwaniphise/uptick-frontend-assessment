import React from 'react'

export const MovieDetails = ({item}) => {
  return (
    <section>
    <h1> <span className='font-bold'>Title: </span> {item.original_title} </h1> 
    <h1><span className='font-bold'>Release Date: </span> {item.release_date} </h1> 
    <p><span className='font-bold'>Overview: </span> {item.overview}</p>
    
    </section>
  )
}
