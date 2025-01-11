import React from 'react'
import Post from './Post'
import Pagination from './Pagination'

function Posts() {
  return (
    <div  style={{maxHeight:'calc(90vh)'}} className='overflow-scroll no-scrollbar'>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Pagination/>
    </div>
  )
}

export default Posts
