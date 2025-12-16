import React, { useEffect, useState } from 'react';
import style from './Button.module.css';

//interface pour verifier le type
//remarque <div> c'est children
interface IButtonProps{
    children:string|React.ReactNode|Array<string|React.ReactNode>;
    onButtonClick?:()=>void;
    bgColor?: string;
    type?:"button"|"submit"|"reset";
}

//Button est un composant commnce par Majuscule
//quand c'est un element de html c'est en minuscule
// entre {} on met de javascript
const Button=({children,onButtonClick,bgColor="red", type="button"}:IButtonProps) => {
    //console.log(style);
    //console.trace(children);
    const [isCliked, setisCliked] = useState(false);
    useEffect(() => {
      //componetDidMount
      setTimeout(()=>{
        setisCliked(false);
      },200);
    }, [isCliked]);  //observe la valeur


    return (
    <button 
        type ={type}
        className={style.Button +(isCliked?" " + style.clicked: "")}
        style={{backgroundColor:bgColor}}
        onClick={() => {
            //traitement event
            setisCliked(true);
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