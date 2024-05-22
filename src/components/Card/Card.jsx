import './Card.css';

const Card = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.image} alt={user.firstName} className="user-image" />
      <div className="user-content">
        <h2>{`${user.firstName} ${user.maidenName} ${user.lastName}`}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {`${user.address.address}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}`}</p>
      </div>
    </div>
  );
};

export default Card;


