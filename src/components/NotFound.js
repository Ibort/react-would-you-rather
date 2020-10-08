import React from 'react'
import { Redirect } from 'react-router-dom';

export default function NotFound () {

  return (
   <div className='notFound'>
       <h1>404 Not Found... :(</h1>
        <Redirect to="/404" />
   </div>
  )
}