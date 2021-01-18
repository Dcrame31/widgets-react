import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    
    const [ term, setTerm ] = useState('Plants');
    const [ debouncedTerm, setDebouncedTerm ] = useState(term);
    const [ results, setResults ] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
        setResults(data.query.search);
        };
        if ( debouncedTerm ) {
            search();
        }
    }, [debouncedTerm]);

    // useEffect(() => {
    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term,
    //             },
    //         });
    //     setResults(data.query.search);
    //     };

    //     if (term && !results.length){
    //         search()
    //     } else {
    //         const timeoutId = setTimeout(()=>{
    //             if(term){
    //                 search();
    //             }
    //         }, 500)
    
    //         return () => {
    //             clearTimeout(timeoutId)
    //         };
    //     };
        

    // }, [term, results.length]);


    const renderedResults = results.map((result, index) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        rel="noreferrer"
                        >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                </div>
            </div>
        )
    })

    // const onSubmitClick = (term) => {
    //     setResults(term)
    // }

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
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
};

export default Search;