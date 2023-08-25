import React, { useState } from 'react'
import {BsSearchHeartFill} from "react-icons/bs"
const Search :React.FC<any> = ({handlesearch,searchtext}:any) => {
 
  return (
    <div className='search'>
      <BsSearchHeartFill className='search__icon'/>
      <input type='text' value={searchtext} onChange={(e:any)=>{handlesearch(e.target.value)}}/>
    </div>
  )
}

export default Search
