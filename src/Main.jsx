import React from 'react'
import SearchComponent from './components/SearchComponent';
import peopleData from './peopledata/PeopleData';

const Main = () => {
  return (
    <div className=' mx-5 sm:mx-16 mt-5 flex justify-center flex-col'>
      <h1 className=' text-violet-800 font-extrabold text-xl text-center mb-5'>Pick user</h1>
      <SearchComponent list={peopleData}/>
    </div>
  )
}

export default Main;