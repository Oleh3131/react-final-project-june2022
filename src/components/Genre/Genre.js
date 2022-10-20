import React from 'react';
import { useNavigate} from "react-router-dom";

const Genre = ({genre}) => {

    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={()=>navigate(`${id}`,{state:{genre}})}>{name}</button>
        </div>
    );
};

export default Genre;