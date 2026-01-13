import React from 'react'

const Page = ({title,children}) => {
  return (
    <div className='gap-0.5'>
      <h2 className='text-3xl font-bold'>{title}</h2>
      <div className='text-[#70698F] font-medium'>{children}</div>
    </div>
  )
}

export default Page
