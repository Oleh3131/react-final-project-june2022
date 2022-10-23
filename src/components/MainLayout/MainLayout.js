import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import img from '../../images/imagesAvatar.png'
import css from './MainLayout.module.css'
import {useTheme} from "../../hooks";

const MainLayout = () => {

    const {theme, setTheme} = useTheme();

    const handleLightThemeClick = () => {

        setTheme('light');

    }

    const handleDarkThemeClick = () => {

        setTheme('dark');

    }

    return (
        <div className={css.MainBlock}>

            <div className={css.HeaderBlock}>
                <ul className={css.UlBlock}>
                    <li><NavLink to={'header'}>General information</NavLink></li>
                    <li><NavLink to={'movies'}>List of movies</NavLink></li>
                    <li><NavLink to={'genres'}>Genres</NavLink></li>
                </ul>

                <div className={css.ButtonsSwitcherBlock}>
                    <button disabled={theme === 'light'} className={css.LightButton}
                            onClick={handleLightThemeClick}>Light
                    </button>
                    <button disabled={theme === 'dark'} className={css.DarkButton}
                            onClick={handleDarkThemeClick}>Dark
                    </button>
                </div>

                <div className={css.AvatarBlock}>
                    <img src={img} alt={"Avatar"}/>
                    <div className={css.GreetingBlock}>
                        <p>Welcome Oleh</p>
                    </div>
                </div>

            </div>

            <div className={css.ContentBlock}>
                <Outlet/>
            </div>


        </div>
    );
};

export default MainLayout;