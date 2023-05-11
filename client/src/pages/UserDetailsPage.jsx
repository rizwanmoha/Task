import { useParams } from 'react-router-dom';
import userData from '../data/data.json';
import './UserDetailsPage.css';
import Header from '../components/Header';
const UserDetailsPage = () => {
  const { index } = useParams();

  const user = userData[index];

  const calculateAge = (dob) => {
    const [day, month, year] = dob.split('/');
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
    <Header />
    <div className="user-profile">
      <h1>User Details</h1>
      <div className="user-details">
        <div className="user-image">
          <img src={user.image} alt="user profile" />
        </div>
        <div className="user-info">
          <p className="user-name">{user.first_name} {user.last_name}</p>
          <p className="user-age">Age: {calculateAge(user.dob)}</p>
          <p className="user-gender">Gender: {user.gender}</p>
          <p className="user-email">Email: {user.email}</p>
          <p className="user-bio">Bio: {user.bio}</p>
          <p className="user-address">Address: {user.address}</p>
          <p className="user-active">IsActive: {user.isActive ? 'True' : 'False'}</p>
          <p className="user-country">Country: {user.country}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserDetailsPage;
