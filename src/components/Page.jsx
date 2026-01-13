import React from 'react'

const Page = ({title,children}) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold'>{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Page
