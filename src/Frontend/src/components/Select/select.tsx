// aqui será só o select, pq é bom ele ser separado do normal

// aqui será só o select, pq é bom ele ser separado do normal

import React, { SelectHTMLAttributes } from 'react';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    haslabel?: boolean;
    label?: string;
    top?: string;
    w?: string;   
    h?: string;    
    fontSize?: string;
}

function Select({
    haslabel = false, 
    label, 
    top = "mt-0",
    w = "w-full",
    h, 
    fontSize,
    ...rest
}: ISelectProps) {
    return (        
    <div className={`${top} ${w}`}>
        { haslabel && (
            <label>{label}</label>
        )}
        <select className= {`
            ${w}
            ${h}
            ${fontSize}            
            py-2 
            px-3                                                  
            bg-white 
            border 
            border-gray-200 
            text-black
            rounded-xl 
            leading-tight 
            `} 
            {...rest}
            />
    </div>
    
)}

export {Select};