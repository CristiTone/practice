import React from 'react';
import {Route} from 'mobx-router';

import Home from '../Components/Home';
import About from '../Components/About'
import NotFound from '../Components/NotFound'

const views = {
    home: new Route({
      path: '/',
      component: <Home/>
    }),
    about: new Route({
        path: '/about',
        component: <About/>
    }),
    notFound: new Route({
      path: '*',
      component: <NotFound/>
  }),
}

export default views;