import {configureStore } from "@reduxjs/toolkit";
import { emptyMeme }  from "orsys-tjs-meme";


const initialState = {
  meme: emptyMeme
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "update":
      return { ...state, meme: { ...state.meme, ...action.payload } };
    case "clear":
      return { ...state, meme: initialState.meme };
    default:
      return state;
  }
};
const update=(memeContent)=>({ type: "update", payload: memeContent })

// let stateb = reducer(undefined, { type: "@@INIT" });
// console.log(stateb);
// stateb = reducer(state,update( { id: 0, text: "coucou" }));
// console.log(stateb);
// stateb = reducer(state, { type: "update", payload: { id: 0, text: "toto" } });
// console.log(stateb);
// stateb = reducer(state, { type: "clear" });
// console.log(stateb);

// const store=createStore(reducer);
const store=configureStore({reducer:reducer})
store.subscribe(()=>{
    console.log(store.getState());
    
})
store.dispatch(update( { id: 0, text: "coucou" }));

store.dispatch(update( { text: "toto" }));
store.dispatch(update( { text: "tata" }));
store.dispatch(update( { text: "totoro" }));
 
