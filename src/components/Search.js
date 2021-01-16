import React, { useState } from 'react';

const Search = () => {

    const [ term, setTerm ] = useState('');
    const [ results, setResults ] = useState([]);

     return (
        <div>
            <div 
                onSubmit={console.log(term)}
                className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                        type="text" />
                </div>
            </div>
        </div>
    )
};

export default Search;