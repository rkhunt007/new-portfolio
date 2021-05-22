import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Skills from './components/Skills';
import { Fragment } from 'react';

function App() {
  return (
      <Fragment>
            <Header></Header>
            <Showcase></Showcase>
            <Skills></Skills>
      </Fragment>
  );
}

export default App;
