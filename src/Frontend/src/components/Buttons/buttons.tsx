import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bg?: string;
    rounded?: string;
    w?: string;
    h?:string;
    wMax?: string;
    hMax?: string;
    wMin?: string;
    hMin?: string;
    text?: string;
    textColor?: string;
    font?: string;
}
function Buttons({bg='bg-white', rounded='rounded-xl', text='text-xl', textColor='text-black', font='font-normal',w, h, wMin, wMax, hMin, hMax,   ...rest }: IButtonProps) {
    return (    
        <div>
            <button className={`
                ${bg} ${rounded} ${textColor} ${text} ${font} ${w} ${h} ${hMax} ${hMin} ${wMax} ${hMax}  
                p-5  
                inline-flex 
                items-center
                hover:opacity-70
                transition-all duration-200
                disabled:opacity-50
            `}           
                {...rest}
            />  
        </div>      
    );
}

export {Buttons}