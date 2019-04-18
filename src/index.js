import React from 'react';
import ReactDOM from 'react-dom';

import HeaderLogo from './components/header-logo';
import HeaderMenuLinks from './components/header-menu-links';
import HeaderMenuInfo from './components/header-menu-info';
import ContentTitle from './components/content-title';
import ContentMenu from './components/content-menu';
import ContentFilter from './components/content-filter';
import ContentTable from './components/content-table';

const App = () => {
  return (
    <div class="container">
      <HeaderLogo />
      <HeaderMenuLinks />
      <HeaderMenuInfo />
      <ContentTitle />
      <ContentMenu />
      <ContentFilter />
      <ContentTable />
    </div>
  );
;}

ReactDOM.render(<App />, document.getElementById('root'));