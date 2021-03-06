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
    term: '',
    filter: { personal: false, night: false, quick: false }
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

  onPersonalChange = (filter) => {
    this.setState({ filter });
  }

  onNightChange = (filter) => {
    this.setState({ filter });
  }

  onQuickChange = (filter) => {
    this.setState({ filter });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    };

    return items.filter((item) => {
      const keys = [item.id, item.city, item.text, item.date];
      const str = keys.join(' ').toLowerCase();
      return str.indexOf(term.toLowerCase()) > -1;
    }); 
  };

  filter(items, filter) {
    return items.filter((item) => {
      let count = 0;
      if (item.personal && (filter.personal === true)) count+=1;
      if (item.night && (filter.night === true)) count+=1;
      if (item.quick && (filter.quick === true)) count+=1;
      
      let flags = 0;
      if (filter.personal === true) flags+=1;
      if (filter.night === true) flags+=1;
      if (filter.quick === true) flags+=1;
      
      if (count === flags || flags === 0) return true;

      return null;
      });
  };

  render() {
    const { tableData, term, filter } = this.state;
    console.log(filter);
    const visibleItems = this.filter(this.search(tableData, term), filter);
    return (
      <div>
        <ContentTitle />
        <ContentMenu />
        <div className="container">
          <ContentSearch onSearchChange={this.onSearchChange} />
          <ContentFilter 
          onPersonalChange={this.onPersonalChange}
          onNightChange={this.onNightChange}
          onQuickChange={this.onQuickChange}
          />
        </div>
        <ContentTable tasks={visibleItems} />
      </div>
      );
  };
};