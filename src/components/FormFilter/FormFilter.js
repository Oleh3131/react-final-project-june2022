import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './FormFilter.module.css'
import {movieValidator} from "../../validators";

const FormFilter = ({setSearchParams, query}) => {

    const [search, setSearch] = useState(query);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: joiResolver(movieValidator), mode: 'all'});

    function submit(moVie) {

        const queryForm = moVie.titleName;

        setSearchParams({query: queryForm});

    }

    return (
        <form onSubmit={handleSubmit(submit)} className={css.FormBlock}>
            <h4>{errors.titleName && <span>{errors.titleName.message}</span>}</h4>
            <div className={css.InputFormBlock}>
                <input className={css.FirstInput} type="search"
                       placeholder={'search title'} {...register('titleName')} value={search}
                       onChange={e => setSearch(e.target.value)}/>
                <input className={css.SecondInput} type='submit' value='Search'/>
            </div>
        </form>

    );
};

export default FormFilter;