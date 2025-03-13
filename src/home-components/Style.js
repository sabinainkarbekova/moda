import React from 'react';
import { Link } from 'react-router-dom';

function Style() {
    return (
    <div class="style-container">
        <div className='style-text'>
        <h4>Create a style that reflects your personality and mood.</h4>
        <h1>Your fashion. Your energy. Your vibe.</h1>
        </div>
        <Link to="/registration" className="btn">
             Registration ❯ 
        </Link>
    </div>
    );
}

export default Style;