import './App.css';
import { Button } from './Button';

export function App() {
  const color = {
    'color': '#fff',
    'background-color': '#000',
    'padding': '10px',
    'border-radius': '4px',
    'margin-top': '10px',
    'cursor': 'pointer'
  }
  const color2 ={
    'color': '#000',
    'border-radius': '4px',
    'background-color': '#ff4',
    'padding': '20px',
  }
  const text = 'Button Component by App'
  const text2 = 'Button component by App2'
  return (
    <div className="App">
        <Button color={color} text={text}/>
        <Button color={color2} text={text2}/>
    </div>
  );
}

