import React from 'react';
import {deburr} from 'lodash-es';

export default function App() {
    return <div>
        <h1>Woah, {deburr('déjà vu')}.</h1>
    </div>
}