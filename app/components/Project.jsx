import Image from 'next/image'
import React from 'react'
import databaseImg from '../assets/database.png'

const Project = ({project_name,type,language,storage,created_at}) => {
  return (
      <div className='w-full px-5 py-5 bg-white text-black flex flex-col gap-2 border-t-2 hover:bg-gray-100 border-gray-300'>
          <div className='flex gap-2 items-center'><p className=' text-xl font-bold'>{project_name}</p><p className='border-2 font-thin max-h-max border-blue-500 bg-blue-100  px-2 flex justify-center items-center rounded-full text-blue-700 text-xs'>{type}</p></div>
          <div className='flex gap-5 '><div className='flex justify-center gap-1 items-center'>{language} <p className='rounded-full border-4 border-blue-700'></p></div><div className='flex gap-2 justify-center items-center'><div><Image src={databaseImg} height={12} width={10} alt='databaseImg'/></div> <p>{storage}</p></div><p>Updated {created_at} day ago</p></div>
      </div>
  )
}

export default Project