import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Resume from './Resume';

ReactDOM.render(
    <React.StrictMode>
        <div style={{ display: 'inline-block',  border: '1px solid black', margin: '20px' }} >
            <Resume template='colorful'/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
