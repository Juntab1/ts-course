// to import starting code it is tsrpfc
import * as React from 'react';
import {useState} from 'react';

// Enum define different options
export enum HairColor {
    Blonde = "Your hair is blonde, good for you",
    Brown = "Cool hair color",
    Pink = "Wow that's so cool",
} 

// describe an object 
// ? means optional
interface Props {
    name : string;
    age : number;
    email : string;
    hairColor: HairColor;
    // function that returns a string
    // getName: (name: string) => string;
}


export function Person ({name, email, age, hairColor}: Props) {

    // both accept null or string
    const [country, setCountry] = useState<string | null>("");


  return (
    <div>   
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{age}</h1>
        <input placeholder='Write down your country...'></input>

        <h2>{HairColor.Blonde}</h2>
        <h2>{hairColor}</h2>
    </div>
  );
}