import React from 'react';
import fashion from '../img/edd0a5fc7821b421db68995b17c662d7.png';

function Maininfo() {
    return (
        <section className="HomeHero">
            <div className="text left">
                <h1>EL</h1>
            </div>
            <div className="image">
                <img 
                    src={fashion} 
                    alt="Fashion" 
                    className="fashion-image" 
                />
            </div>
            <div className="text right">
                <h1>LE</h1>
            </div>
        </section>
    );
}

export default Maininfo;