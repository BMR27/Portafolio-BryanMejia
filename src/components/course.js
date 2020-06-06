import React from 'react';
export default (props)=>{
    const course = props.element;
    return(
        <div className ="shadow p-4 bg-white mr-3">
            <h4 className ="font-bold">{course.title}</h4>
               <br/>
        </div>
    )

}