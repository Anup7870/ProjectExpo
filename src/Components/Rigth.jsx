import React from 'react'
import RigthHead from './RigthHead'
import { Routes,Route } from 'react-router-dom'
import DashBoard from './DashBoard'
import Form from './Form'
import Product from '../Pages/Product/Product'
export default function Rigth() {
  return (
    <>
    <div className='h-full w-[85%] px-7 overflow-hidden'>
    <RigthHead/>
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path="/addPro" element={<Form/>}/>
      <Route path="/project" element={<Product/>}/>
    </Routes>
    </div>
    </>
  )
}
