import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card.jsx'

function App() {

  const [count, setCount] = useState(1);
  const [message, setMessage] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  }

  const getMessage = async () => {

    try {
      const data = await fetch(
        `https://api.adviceslip.com/advice/${count}`
      );
      const res = await data.json();
      const advice = res.slip
      if (advice) {
        setMessage(advice);
        console.log(advice);
      } else {
        setMessage({ id: 'Id not fuond!', advice: 'Advice not fuond!' });
      }


    } catch (error) {

      console.log(error);
    }
  }

  const setLocalStorage = () => {
    localStorage.setItem('advice', JSON.stringify(message));
  }

  const geLocalStorage = () => {
    const favorites = localStorage.getItem('advice');
  }

  useEffect(() => {
    geLocalStorage();
    getMessage();
  }, [])


  /* La chiamata verrà effettuata al primo render e ad ogni variazione del messaggio */
  useEffect(() => {
    getMessage();
    /* L'aggiornamento nel local storage avviene con ritardo rispetto al render del messaggio */
    setLocalStorage();
  }, [count])

  return (
    <>
      <Card
        title={message.id}
        description={message.advice}
        onClick={handleClick}
      />
    </>
  )
}

export default App