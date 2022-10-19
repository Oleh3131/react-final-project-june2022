import React, {useState} from 'react';
import {useForm} from "react-hook-form";

const FormFilter = ({setSearchParams,query}) => {

    const [search,setSearch] = useState(query);

    const {register, handleSubmit} = useForm();

    function submit(moVie) {

        const queryForm = moVie.titleName;

        setSearchParams({query: queryForm});

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="search" placeholder={'movie title'} {...register('titleName')} value={search} onChange={e=>setSearch(e.target.value)}/>
            <input type='submit' value='Search'/>
        </form>

    );
};

export default FormFilter;