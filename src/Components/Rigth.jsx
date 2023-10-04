import React from 'react'
import RigthHead from './RigthHead'
import { Routes,Route } from 'react-router-dom'
import DashBoard from './DashBoard'
import Form from './Form'
export default function Rigth() {
  return (
    <>
    <div className='h-full w-[85%] px-7 '>
    <RigthHead/>
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path="/addPro" element={<Form/>}/>
    </Routes>
    </div>
    </>
  )
}
