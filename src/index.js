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
      <div className="header__background">
        <div className="header container">
          <HeaderMenuLinks />
          <HeaderMenuInfo />
        </div>
      </div>
      
      <div className="container">
      <ContentTitle />
      <ContentMenu />
      <ContentFilter />
      <ContentTable />
    </div></div>
  );
;}

ReactDOM.render(<App />, document.getElementById('root'));