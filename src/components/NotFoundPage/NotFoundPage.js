import React from 'react';

import css from './NotFoundPage.module.css'
import img from '../../images/error-404-06.jpg'

const NotFoundPage = () => {
    return (
        <div className={css.NotFoundBlock}>
            <img src={img} alt="Not Found Page"/>
        </div>
    );
};

export default NotFoundPage;