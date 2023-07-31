import React from 'react'
import iconItems from '../ultis/icons'

const {FiSearch} = iconItems

const Search = () => {
  return (
    <div className='w-full flex items-center'>
      <span className='h-10 pl-4 bg-[#2f2739] text-gray-400 flex items-center justify-center rounded-l-[20px]'>
        <FiSearch size={20}/>
      </span>
      <input
      type="text"
      className='outline-none bg-[#2f2739] px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-200 placeholder:text-gray-400'
      placeholder='Search songs, artists, lyrics...'
      />
    </div>
  )
}

export default Search