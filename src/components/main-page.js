import React, { Component } from 'react';

import ContentTitle from './content-title';
import ContentMenu from './content-menu';
import ContentSearch from './content-search';
import ContentFilter from './content-filter';
import ContentTable from './content-table';

import ApiService from '../services/api-service';

export default class MainPage extends Component {
  apiService = new ApiService();

  state = {
    tableData: [],
    term: ''
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

  onSearchChange = (term) => {
    this.setState({ term });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      const keys = [item.id, item.city, item.text, item.date];
      const str = keys.join(' ') + keys.join(' ').toLowerCase();
      return str.indexOf(term) > -1;
    }); 
  };

  render() {
    const { tableData, term } = this.state;

    const visibleItems = this.search(tableData, term);
    return (
      <div>
        <ContentTitle />
        <ContentMenu />
        <div className="container">
          <ContentSearch onSearchChange={this.onSearchChange}/>
          <ContentFilter />
        </div>
        <ContentTable tasks={visibleItems} />
      </div>
      );
  };
};