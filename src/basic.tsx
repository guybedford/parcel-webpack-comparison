import React from 'react';
import ReactDOM from 'react-dom';
import {deburr} from 'lodash-es';

function App() {
    return <div>
        <h1>Woah, {deburr('déjà vu')}.</h1>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));