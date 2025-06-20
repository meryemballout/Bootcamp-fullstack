import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await axios.get('http://localhost:5000/api/hello');
      setMessage(res.data.message);
    };
    fetchMessage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/world', { input });
    setResponse(res.data.message);
  };

  return (
    <div>
      <h1>{message}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default App;
