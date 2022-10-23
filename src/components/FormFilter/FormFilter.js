import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import css from './FormFilter.module.css'

const FormFilter = ({setSearchParams, query}) => {

    const [search, setSearch] = useState(query);

    const {register, handleSubmit} = useForm();

    function submit(moVie) {

        const queryForm = moVie.titleName;

        setSearchParams({query: queryForm});

    }

    return (
        <form onSubmit={handleSubmit(submit)} className={css.FormBlock}>
            <input className={css.FirstInput} type="search"
                   placeholder={'search title'} {...register('titleName')} value={search}
                   onChange={e => setSearch(e.target.value)}/>
            <input className={css.SecondInput} type='submit' value='Search'/>
        </form>

    );
};

export default FormFilter;