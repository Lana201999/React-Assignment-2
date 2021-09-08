import React from "react";
import { useState } from 'react';



function Eventss(props) {
    let [Username, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let arr=["It's such a beautiful day.",
    "Perhaps you need some motivation to do what you should.",
    "We don’t see things as they are, we see them as we are.",
    "Remember that failure is an event, not a person.",
    "If you wait, all that happens is you get older",
    " All journeys have secret destinations of which the traveler is unaware.",
    "If opportunity doesn’t knock, build a door.",
    "How we spend our days is, of course, how we spend our lives.",
    "Success consists of going from failure to failure without loss of enthusiasm.",
    "The past has no power over the present moment."];

  let x =Math.floor(Math.random() * 9);
  let[ sentense,setSentence]=useState(arr[x]);
  arr[x]= sentense;
  
 
    return ( <div >
          <p>{Username}</p>
        <p>{email}</p>
        <form>
            <label >User Name</label>
            <input type="text" id="UserName" name="UserName" value={Username} onChange={element => setUserName(element.target.value) } ></input><br></br>
            <label >Email</label>
            <input type="text" id="Email" name="Email" value={email} onChange={element => setEmail(element.target.value)} ></input>
           </form>

           <div>{arr.map( (item) => <li key={item}>{item}</li>)}</div>

           <button onClick = { () => setSentence("This sentence has changed")} >Change Sentence </button>
           <div > number of index that change {x+1}</div>

      
         </div>
       
    );
}

export default Eventss;