import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [ term, setTerm ] = useState('');
    const [ results, setResults ] = useState([]);

    useEffect(() => {
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api/php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term,
            },
        });
        };
        
        search();
    }, [term]);

    const onSubmitClick = (term) => {
        setResults(term)
    }

     return (
        <div>
            <div className="ui form">
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