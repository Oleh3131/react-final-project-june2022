import React from 'react';

const Genre = ({genre}) => {

    const {id,name} = genre;
    
    return (
        <div>
            <h4>name: {name}</h4>
        </div>
    );
};

export default Genre;