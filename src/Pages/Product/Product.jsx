import React,{useState} from 'react'
import Card from "../../Components/Card"

export default function Product() {
  const [value, setValue] = useState(2);
  return (
    <>
    <div className='w-full   h-full mt-4 overflow-auto flex flex-row flex-wrap gap-12'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
      </div>
    </>
    
    
  )
}
