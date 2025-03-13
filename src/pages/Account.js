
import React, { useState } from 'react';
import Header from '../home-components/Header';
import Footer from '../home-components/Footer';
import './design/Account.css';

function Account() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setShowUsers(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
      setUsers(sortedData);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };


  const handleUserClick = (user) => {
    setSelectedUser(user === selectedUser ? null : user);
  };

  return (
    <div>
      <Header />
    <div className="personal-page">
      <div className="personal-container">
        <h1 className="personal-heading">Клиенты</h1>
        {!showUsers && (
          <div className="button-container">
            <button className="fetch-button" onClick={fetchUsers}>
              Вывести всех
            </button>
          </div>
        )}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Загрузка данных...</p>
          </div>
        )}
        {showUsers && !loading && (
          <div className="users-container">
            <ul className="users-list">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className={`user-item ${selectedUser === user ? 'active' : ''}`}
                  onClick={() => handleUserClick(user)}
                >
                  <div className="user-name">{user.name}</div>
                  {selectedUser === user && (
                    <div className="user-details">
                      <div className="user-detail">
                        <span className="detail-label">ID:</span> 
                        <span className="detail-value">{user.id}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Username:</span> 
                        <span className="detail-value">{user.username}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Email:</span> 
                        <span className="detail-value">{user.email}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Phone:</span> 
                        <span className="detail-value">{user.phone}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Website:</span> 
                        <span className="detail-value">{user.website}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Address:</span> 
                        <span className="detail-value">
                          {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                        </span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Geo Latitude:</span> 
                        <span className="detail-value">{user.address.geo.lat}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Geo Longitude:</span> 
                        <span className="detail-value">{user.address.geo.lng}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Company Name:</span> 
                        <span className="detail-value">{user.company.name}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Company Catch Phrase:</span> 
                        <span className="detail-value">{user.company.catchPhrase}</span>
                      </div>
                      <div className="user-detail">
                        <span className="detail-label">Company BS:</span> 
                        <span className="detail-value">{user.company.bs}</span>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Account;
