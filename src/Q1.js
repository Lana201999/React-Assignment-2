import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
  
function App() {
  let text1="Hello World";
  let text2="Hello Palestine";
 let text3 = text1;
 let text4;
  let [text, setText] = useState(text3);
   if (text === text1){
    text3=text1;
    text4=text2;
  }else{text3=text2;
    text4=text1;} 
  return (
    <div className="App">
      <div>{text}</div>
      <button onClick = { () => setText(text4)} > Click to change the text.. </button>
    </div>
  );
}

export default App;
