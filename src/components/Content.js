import React from 'react';
import QueryResults from './QueryResults';
import Information from './Information';

function Content() {
    return (
        <div className="Content">
            <QueryResults />
            <Information />
        </div>
    );
}

export default Content;