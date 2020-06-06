
import React from 'react';

export default (props) => {
    const certificate = props.element;
    return (
    <div className ="shadow p-8 bg-white mr-4">
        <h4 className ="font-bold">{certificate.title}</h4>
       
    </div>
    );

}