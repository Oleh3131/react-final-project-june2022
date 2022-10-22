import React, {useEffect, useRef} from 'react';

import css from './HeaderList.module.css'

const HeaderList = ({movie, reference}) => {

    const {id, original_title, poster_path} = movie;


    useEffect(() => {

        const el = reference.current;

        if (el) {


            const onWheel = (e) => {

                e.preventDefault();

                el.scrollTo({

                    left: el.scrollLeft + e.deltaY + 10,

                    behavior: 'smooth'
                })
            }

            el.addEventListener('wheel', onWheel)

            return () => el.removeEventListener('wheel', onWheel)
        }

    }, [])

    return (
        <div className={css.ContentBlock}>

            <h4>{original_title}</h4>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title}/>

        </div>
    );
};

export default HeaderList;