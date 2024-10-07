import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      // Perform any logout operations, like clearing tokens or user data
      localStorage.removeItem('token'); // Remove the token or any user data stored
       navigate('/login'); // Redirect to login page after logout
    };
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Hello, Test User</h1>
                <p>How can I help you today?</p>
            </div>
            <div className="card-container">
                <div className="card">Suggest an organized list of the best food spots in a city</div>
                <div className="card">Give me a quick walkthrough of The Byzantine Empire</div>
                <div className="card">Help me understand American football</div>
                <div className="card">I’m sick and need help crafting a text message for my boss</div>
            </div>
            <div className="prompt-container">
                <input type="text" placeholder="Enter a prompt here" />
                <button>Send</button>
            </div>
            <button className="logout-button" onClick={handleLogout} >Logout</button>
        </div>
    );
};

export default Dashboard;
