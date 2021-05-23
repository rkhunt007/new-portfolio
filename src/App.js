import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Fragment } from 'react';

function App() {
  return (
      <Fragment>
            <Header></Header>
            <Showcase></Showcase>
            <Skills></Skills>
            <Experience></Experience>
            <Contact></Contact>
      </Fragment>
  );
}

export default App;
