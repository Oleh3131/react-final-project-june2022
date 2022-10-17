import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {useForm} from "react-hook-form";

const MainLayout = () => {

    const {register, handleSubmit, reset} = useForm();

    function submit(movie) {

        console.log(movie)

    }

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

                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'movie title'} {...register('titleName')}/>
                    <button>Search</button>
                </form>


            </div>

            <Outlet/>

        </div>
    );
};

export default MainLayout;