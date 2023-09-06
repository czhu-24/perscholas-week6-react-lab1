import { useState } from 'react';
import './App.css';

import HelloWorld from './components/HelloWorld.jsx';
import ColorChanger from './components/ColorChanger.jsx';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <HelloWorld />
      <ColorChanger />
      <ContactForm />
    </>
  )
}

export default App;


