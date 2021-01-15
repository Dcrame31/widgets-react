import React from 'react';
import Accordion from './Accordion';

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

export default () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
};