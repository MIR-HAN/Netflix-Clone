import React from 'react'
import { baseImgUrl } from '../constants';

const DetailDisplay = ({title,data}) => {
   console.log(data)
  return (
    <div className='mb-6'>
        <h2 className='text-lg font-semi-bold mb-2'>{title}</h2>

       <div className='flex gap-5'>
        {data.map((item)=> (
          item.logo_path ?(<div className='bg-white py-1 px-2 rounded-md'>
            <img className='w-[100px] h-[40px] object-contain' src={baseImgUrl + item.logo_path} alt="" />
          </div>) :
            (<span className='border p-1 px-2 rounded-md'>{item.name}</span>)
        ))}
       </div>

    </div>
  )
}

export default DetailDisplay;