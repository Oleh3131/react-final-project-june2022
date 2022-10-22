import React, {useEffect, useRef, useState} from 'react';

import css from './Header.module.css'
import {movieService} from "../../services";
import HeaderList from "../HeaderList/HeaderList";

const Header = () => {

    const [currentMovies, setCurrentMovies] = useState([]);

    const [state, setState] = useState({
        isScrolling: false,
        clientX: 0,
        scrollX: 0
    });

    useEffect(() => {

        movieService.getCurrentList().then(({data}) => setCurrentMovies(data.results))

    }, [])


    const ref = useRef();

    function onMouseDown(e) {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        setState({...state, isScrolling: true, clientX: e.clientX})
    }

    function onMouseUp(e) {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        setState({...state, isScrolling: false})
    }

    function onMouseMove(e) {
        if (ref && ref.current && !ref.current.contains(e.target)) {
            return
        }
        e.preventDefault()

        const {clientX, scrollX, isScrolling} = state;

        if (isScrolling) {

            ref.current.scrollLeft = scrollX + e.clientX - clientX;

            setState({...state, scrollX: scrollX + e.clientX - clientX, clientX: e.clientX})

        }
    }

    useEffect(() => {

        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);

        return () => {

            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);

        }

    })

    return (
        <div className={css.HeaderBlock}>

            <div className={css.HeaderBlockList}>
                <div className={css.HeaderList} ref={ref} onMouseDown={onMouseDown}
                     onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
                    {currentMovies.map(movie => <HeaderList key={movie.id} movie={movie}
                                                            reference={ref}/>)}
                </div>
            </div>

        </div>
    );
};

export default Header;
