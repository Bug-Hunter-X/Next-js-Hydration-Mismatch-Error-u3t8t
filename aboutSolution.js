```javascript
// pages/aboutSolution.js
import { useState, useEffect } from 'react';

export default function About() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('This is the about page.');
  }, []);

  return (
    <div>{message}</div>
  );
}
```