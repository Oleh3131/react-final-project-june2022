import React from 'react';

import css from './Reviews.module.css'

const Reviews = ({review}) => {

    const {author,content,created_at} = review;


    return (
        <div className={css.MainReviewsBlock}>
            <div className={css.ReviewsBlock}>
                <h2>{author}</h2>
                <h4>{content}</h4>
                <h4>date: {created_at}</h4>
            </div>
        </div>

    );
};

export default Reviews;