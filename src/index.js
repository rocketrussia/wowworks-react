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
    <div className="container">
      <div className="header">
      <HeaderMenuLinks />
      <HeaderMenuInfo />
      </div>
      
      <ContentTitle />
      <ContentMenu />
      <ContentFilter />
      <ContentTable />
    </div>
  );
;}

ReactDOM.render(<App />, document.getElementById('root'));