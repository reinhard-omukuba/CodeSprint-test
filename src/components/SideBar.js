import React from 'react';
import {Link} from 'react-router-dom';

function SideBar() {
    return (
        <div className="sideBar">

            <div className="leftSecOne">

                <h3>Menu</h3>
                <Link to="tournaments">
                  <li>Live Tournaments</li>
                </Link>

                <Link to="hosttournaments">
                    <li>Host a tournament</li>
                </Link>
               
                <li>Watchlist</li>


            </div>

            <div className="LeftSecTwo">

                <li>Friends</li>
                <li>Parties</li>
                <li>Tournaments</li>

            </div>

            <div className="LeftSecThree">
                <li>Setting</li>
                <li>Account</li>
            </div>



            
        </div>
    )
}

export default SideBar;
