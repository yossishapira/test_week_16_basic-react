import { useState } from 'react'
import './App.css'
import CardUser from './CardUser'
import data from './data/data.json'
import FilterUsers from './FilterUsers'

function App() {
  const [users] = useState(data);
  const [filteredUsers, setFilteredUsers] = useState(data);
  const [searchName, setSearchName] = useState("");
  const [searchAttack, setSearchAttacks] = useState("");

  return (


    <>
      <div>
        <h1 className='flex text-3xl'> Thrat Actor Database</h1>
      </div>
      <FilterUsers
        users={users}
        searchName={searchName}
        setSearchName={setSearchName}
        searchAttack={searchAttack}
        setSearchAttac={setSearchAttacks}
        setFilteredUsers={setFilteredUsers}

      />

      <CardUser users={filteredUsers} />



    </>
  )
}

export default App
