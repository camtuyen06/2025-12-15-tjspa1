import React from 'react';
import style from './Button.module.css';

//interface pour verifier le type
//remarque <div> c'est children
interface IButtonProps{
    children:string|React.ReactElement|Array<string|React.ReactElement>;
    onButtonClick?:()=>void;
    bgColor?: string;
    type?:"button"|"submit"|"reset";
}

//Button est un composant commnce par Majuscule
//quand c'est un element de html c'est en minuscule
// entre {} on met de javascript
const Button=({children,onButtonClick,bgColor="red", type="button"}:IButtonProps) => {
    //console.log(style);
    console.trace(children);
    return (
    <button 
        type ={type}
        className={style.Button}
        style={{backgroundColor:bgColor}}
        onClick={() => {
            //traitement evvent
            if(onButtonClick){
                 onButtonClick()
            }
        }}
    >
        {children}
    </button>
    );
};

export default Button;