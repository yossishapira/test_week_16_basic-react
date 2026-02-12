import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCardUser from './UserCardUser'
import data from './data/data.json'
import FilterUsers from './FilterUsers'

function App() {
  // const [users] = useState(data);
  // const [filteredUsers, setFilteredUsers] = useState(data);

  // const [searchName, setSearchName] = useState("");

  return (


    <>
      <div>
        <h1 className='flex text-3xl'> Thrat Actor Database</h1>
      </div>
      {/* <FilterUsers
        users={users}
        searchName={searchName}
        setSearchName={setSearchName}
        setFilteredUsers={setFilteredUsers}


      /> */}

      <UserCardUser users={data} />



    </>
  )
}

export default App
