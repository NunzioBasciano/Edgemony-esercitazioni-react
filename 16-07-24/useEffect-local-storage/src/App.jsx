import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card.jsx'


function App() {

  const [message, setMessage] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  const handleMessage = async () => {

    try {
      const data = await fetch(
        'https://api.adviceslip.com/advice'
      );
      const res = await data.json();
      const advice = res.slip
      setMessage(advice);

    } catch (error) {

      console.log(error);
    }
  }

  useEffect(() => {
    handleMessage();
  }, [isClicked])

  return (

    <Card
      title={message.id}
      description={message.advice}
      onClick={handleClick}
      isClicked={isClicked}
      setIsClicked={setIsClicked}
    />
  )
}

export default App