import React, {useEffect, useRef, useState} from 'react';

import css from './Header.module.css'
import {movieService} from "../../services";
import HeaderList from "../HeaderList/HeaderList";
import firstImg from '../../images/Star-Wars-2019-696x392.jpg'
import secondImg from '../../images/nextPhoto.jpg'

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

            <h1>The most relevant latest movies</h1>

            <div className={css.HeaderBlockList}>
                <div className={css.HeaderList} ref={ref} onMouseDown={onMouseDown}
                     onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
                    {currentMovies.map(movie => <HeaderList key={movie.id} movie={movie}
                                                            reference={ref}/>)}
                </div>
            </div>

            <div className={css.MainInformationBlock}>

                <div className={css.TextContentBlock}>
                    <p>
                        We are glad to welcome all lovers of interesting and high-quality cinema on
                        our
                        website. We have over 50,000 free movies and series online. Do you love
                        cinema as
                        much as we do? Do you constantly follow the release of new products? Not a
                        single
                        evening goes by that you don't watch a couple of movies? Then you have come
                        to the
                        right place! In our cinema you can watch movies online for free and without
                        any
                        restrictions!
                    </p>

                    <p>
                        Especially for our esteemed users, we have tried to collect the best
                        collection of
                        films of various genres, times and peoples! The project team constantly
                        monitors the
                        release of films for rent and regularly adds pictures so that you can be one
                        of the
                        first to enjoy both the best world masterpieces and new movies for free!
                    </p>
                    <p>
                        Especially for your convenience, the site has a search bar, thanks to which
                        you can
                        quickly find the desired movie. If the search did not return any results,
                        try using
                        the advanced search or write to us, and we will definitely try to add the
                        movie you
                        need.
                    </p>

                </div>

                <div className={css.ImgBlock}>
                    <img src={firstImg} alt="Star Wars"/>
                    <img src={secondImg} alt="Collection"/>
                </div>

            </div>


        </div>
    );
};

export default Header;
