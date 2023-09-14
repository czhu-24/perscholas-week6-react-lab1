import { useState } from 'react';
import './App.css';

import HelloWorld from './components/HelloWorld';
import ColorChanger from './components/ColorChanger';
import ContactForm from './components/ContactForm';
import TextInput from './components/TextInput';
import ItemList from './components/ItemList';


function App() {

  const [books, setBooks] = useState([
    {
      title: "A Song of Ice and Fire",
      author: "GRR Martin"
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "JK Rowling"
    }
  ]);
  return (
    <>
      <HelloWorld />
      <ColorChanger />
      <ContactForm />
      <TextInput />
      <ItemList books={books} />
    </>
  )
}

export default App;


