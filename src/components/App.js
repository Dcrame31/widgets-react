import React, { useState }from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 App
//             </div>
//         )
//     }
// };

// export default App;

const items = [
    {
        title: 'What is React',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library amongst engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])
    
    return (
        <div className="ui container">
        
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
         
            {/* <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options} 
            />  */}
            <Translate />
        </div>
    )
};