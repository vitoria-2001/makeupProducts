import React from 'react';

export default function Spinner () {
    return ( 
        <div> 
            <div className="spinner-border text-danger"></div>
            <div>
                <span>Loading...</span>
            </div>
        </div>  
    );
};