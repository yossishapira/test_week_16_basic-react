import React from 'react'


export default function CardUser({ users }) {
    if (users.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No users found
      </p>
    );
  }

  
  return (
      <div>
      {users.map(function(user,index) {
          return (
              <table key={index} className="table  border w-300 h-30">
            <thead>
                <tr  className='border'>
                    <th>image</th>
                    <th>Name</th>
                    <th>Organization</th>
                    <th>Number of Attacks</th>
                    <th>Status</th>
                    <th className=''>Short Description of Relation to Israel</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className=''><img src={user.imageUrl} alt="" /> </td>
                    <td className=''>{user.name}</td>
                    <td className=''>{user.organization}</td>
                    <td className=''>{user.attacksCount}</td>
                    <td className=''>{user.status}</td>
                    <td className=''>{user.relationToIsraelSummary}</td>
                </tr>
            </tbody>
        </table>
  );
})}
</ div>
)

}












































// function UserCard({ user }) {
//     return (
//         <UserCard>
//             <div className="space-y-1 border">
//                 <div><strong>Name:</strong> {user.name}</div>
//                 <div><strong>Organization:</strong> {user.attacksCount}</div>
//                 <div><strong>Number of Attacks:</strong> {user.status}</div>
//                 <div><strong>Status:</strong> {user.relationToIsraelSummary}</div>
//                 <div><strong>Short Description of Relation to Israel:</strong> {user.relationToIsraelSummary}</div>
//                 <img src={user.imageUrl} alt="" />
//             </div>
//         </UserCard>
//     );
// }

// export default UserCard;