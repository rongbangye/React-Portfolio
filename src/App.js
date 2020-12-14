import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import About from './pages/About';
import Header from './components/Header';
import ContactMe from './pages/Form';
import Work from './pages/Work';

import { gsap } from 'gsap';
import { CSSTransition } from 'react-transition-group';
const routes = [
  { path: '/about', name: 'About', Component: About },
  { path: '/work', name: 'Work', Component: Work },
  { path: '/form', name: 'form', Component: ContactMe },
];

function App() {
  const onEnter = (node) => {
    // enter animation
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: 'power3.InOut',
        opacity: 0,
        stagger: {
          amount: 0.6,
        },
      }
    );
  };
  const onExit = (node) => {
    // exit animation
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: 'power3.InOut',
        stagger: {
          amount: 0.6,
        },
      }
    );
  };

  return (
    <>
      <Header />
      <div className='container'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames='page'
                onEnter={onEnter}
                onExit={onExit}
                unmountOnExit
              >
                <div className='page'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
