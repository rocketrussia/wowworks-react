import React from 'react';
import ReactDOM from 'react-dom';

import HeaderMenuLinks from './components/header-menu-links';
import HeaderMenuInfo from './components/header-menu-info';
import ContentTitle from './components/content-title';
import ContentMenu from './components/content-menu';
import ContentFilter from './components/content-filter';
import ContentTable from './components/content-table';

const App = () => {
  return (
    <div>
      <header className="header__background">
        <div className="header container">
          <HeaderMenuLinks />
          <HeaderMenuInfo />
        </div>
      </header>
      <ContentTitle />
      <ContentMenu />
      <ContentFilter />
      <ContentTable />
    </div>
  );
;}

ReactDOM.render(<App />, document.getElementById('root'));