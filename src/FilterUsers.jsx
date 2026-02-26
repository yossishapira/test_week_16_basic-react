import React from 'react'

export default function FilterUsers({ users, searchName, setSearchName, searchAttack, setSearchAttacks, setFilteredUsers }) {

    function byName(e) {
        const value = e.target.value;
        setSearchName(value);

        const filtered = users.filter(function (user) {
            return user.name
                .toLowerCase()
                .includes(value.toLowerCase());
        });

        setFilteredUsers(filtered);
    }

    function byAttack(e) {
        const value = e.target.value;
        setSearchAttacks(value);

        const filtered = users.filter(function (user) {
            return user.attacksCount
        });

        setFilteredUsers(filtered);
    }

    return (
        <div className='flex'>
            <input
                type="text"
                placeholder="Search by name"
                value={searchName}
                onChange={byName}
                className=" border p-3 rounded"
            />
            <input
                type="number"
                placeholder="Search by number of attacks"
                value={searchAttack}
                onChange={byAttack}
                className=" border p-3 rounded"
            />
            <select className=" border  p-3 rounded" name="" id="">
                <option value="Ford">Ford</option>
                <option value="Volvo" selected>Volvo</option>
                <option value="Fiat">Fiat</option> </select>
        </div>
    )
}
