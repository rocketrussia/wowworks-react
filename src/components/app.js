import React, { Component } from 'react';

import HeaderMenuLinks from './header-menu-links';
import HeaderMenuInfo from './header-menu-info';

import MainPage from './main-page';
import FinancePage from './finance-page';
import CompanyPage from './company-page';
import StatsPage from './stats-page';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  
  render() {

    return (
      <Router basename="/wowworks-react">
      <div>
        <header className="header__background">
          <div className="header container">
            <HeaderMenuLinks />
            <HeaderMenuInfo />
          </div>
        </header>
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/finance" component={FinancePage} />
          <Route path="/company" component={CompanyPage} />
          <Route path="/stats" component={StatsPage} />
          <Redirect to="/" />
        </Switch>
      </div>
      </Router>
      );
  };
};

export default App;