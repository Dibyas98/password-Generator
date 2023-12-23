import React from 'react'

export default function Pass(props) {
    const handleCopyClick = () => {
        navigator.clipboard.writeText(props.pass);
        alert('Password copied to clipboard!');
      };
    // console.log(props.pass);
  return (
    <div className='flex justify-center w-screen p-2 gap-1'>
        <input type="text" disabled value={props.pass} className='w-11/12 h-10 p-4 border-fuchsia-700 border rounded'/>
    <button className='bg-sky-900 w-10 rounded-sm' onClick={handleCopyClick}><i className="fa-solid fa-copy text-zinc-200"></i></button>
    </div>
  )
}
