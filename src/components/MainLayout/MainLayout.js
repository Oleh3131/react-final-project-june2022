import React from 'react';
import {Link, Outlet} from "react-router-dom";



const MainLayout = () => {

    return (
        <div>
            <div>

                <div>
                    <ul>
                        <li><Link to={'header'}>Main info</Link></li>
                        <li><Link to={'movies'}>List of movies</Link></li>
                        <li><Link to={'genres'}>Genres</Link></li>
                    </ul>
                </div>


            </div>

            <Outlet/>

        </div>
    );
};

export default MainLayout;