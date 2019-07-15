import React from 'react';
import {Provider} from 'mobx-react';

import {MobxRouter, RouterStore, startRouter} from 'mobx-router';
import views from './config/views';
import UserStore from './stores/userStore';
import CurrencyStore from './stores/currencyStore';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

const stores = {
  router: new RouterStore(),
  user: UserStore,
  currency: CurrencyStore
};

startRouter(views, stores);

function AppProvider() {
  
  return (
    <Provider store={stores}>
      <div>
        <Header />
        <Sidebar />
        <Footer />
        <MobxRouter />
      </div>
    </Provider>
  );
}

export default AppProvider;
