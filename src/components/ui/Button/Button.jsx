import React, { Children } from 'react';
import style from './Button.module.css';

//Button est un composant commnce par Majuscule
//quand c'est un element de html c'est en minuscule
// entre {} on met de javascript
const Button=({children,title,onButtonClick,bgColor='red'}) => {
    //console.log(style);
    console.trace(children);
    return (
    <button className={style.Button}
        style={{backgroundColor:bgColor}}
        onClick={(evt) => {
            onButtonClick(title)
        }}
    >
        {children}
    </button>
    );
};

export default Button;