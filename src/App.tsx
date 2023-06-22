import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Person, HairColor } from './components/Person';


function App() {

  // create variable in typescript
  // in JS: const name = "Jun"
  // in Typescript:
  // const name: string = "Jun"
  // const age: number = 19
  // const isMarried: boolean = false
  // how a function is created
  // name is a number but we are returning a number or if you are not returning
  // anything do void or just don't put anythign there
  // const getName = (name: string): number => {
  //   if (name === "Jun"){
  //     return 19
  //   }
  //   else{
  //     return 0
  //   }
  // }
  return (
    <div className="App">
      <Person name='Jun' age={19} email='jun@gmail.com' hairColor={HairColor.Blonde}/>
    </div>
  );
}

export default App;
