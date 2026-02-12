import UserCard from './UserCardUser';

function ShowTerrorists({ users }) {
  return (
    <div className="space-y-4">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default ShowTerrorists;