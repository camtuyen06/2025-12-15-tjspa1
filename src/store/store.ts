import {configureStore } from "@reduxjs/toolkit";
import ressourcesReducer from "./ressources";
import currentReduccer from "./current";



const store=configureStore({
    reducer:{ressources: ressourcesReducer, current:currentReduccer}
})
store.subscribe(()=>{
    console.log(store.getState());
    
})

 
