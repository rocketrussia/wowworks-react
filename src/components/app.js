import React, { Component } from 'react';

import HeaderMenuLinks from './header-menu-links';
import HeaderMenuInfo from './header-menu-info';
import ContentTitle from './content-title';
import ContentMenu from './content-menu';
import ContentFilter from './content-filter';
import ContentTable from './content-table';

import ApiService from '../services/api-service';

class App extends Component {

  apiService = new ApiService();

  state = {
    tableData: [],
  };

  constructor() {
    super();
    this.updateTable();
  };

  onError = (err) => {
    this.setState({
      tableData: [
        { "text": "Сервер недоступен. Попробуйте зайти позже" }
      ]
    });
  };

  updateTable() {
    this.apiService
      .getNewTask()
      .then(task => {
        return this.setState({tableData: task})})
      .catch(this.onError);
  };

  render() {
    const { tableData } = this.state;
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
        <ContentTable tasks={tableData}/>
      </div>
      );
  };
};

export default App;