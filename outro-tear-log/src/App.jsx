import { useState } from 'react'
import './App.css'
import DidYouCryScreen from './screens/DidYouCryScreen';
 
export default function App() {
  const [criedToday, setCriedToday] = useState(null);
 
  return (
    <>
      {criedToday === null && <DidYouCryScreen onAnswer={setCriedToday} />}
      {/* next screen goes here once we build it, based on criedToday */}
    </>
  );
}
