/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Content(){
   return(
    <>
      <h1>INI HALAMAN LOGIN</h1>
      <Link to='/teacher'>Teacher</Link>
      <Link to='/student'>Student</Link>
    </>
   )
}

function Login(){
    return (
        <div>
          <Content/>
        </div>
    )
}

export default Login;