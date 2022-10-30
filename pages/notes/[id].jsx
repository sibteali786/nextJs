// pages/notes/index.jsx
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Page = () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {id} </h1>
    </div>
  )
}


export default Page;