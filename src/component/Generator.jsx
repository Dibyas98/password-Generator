import React, { useState } from 'react'

export default function Generator(props) {
    const [length, setlength] =useState(8)
    // function lenCha(){
        
    // }
    const lengthChange = (e) =>{
        setlength(e.target.value)
        props.len(length)
    }
  return (
    <div className='border-2 p-4'>
      <h1 className='text-4xl font-bold text-center'>Password Generator</h1>
      <input type="text" name="" id="" />
        <div className='flex justify-between'>
        <p>Select Password Length <span className='font-semibold'>(**8-50 characters**)</span></p>
      <input type="number" name="" id="" className='border-2' value={length} min={8}  onChange={lengthChange}/>
        </div>

    </div>
  )
}
