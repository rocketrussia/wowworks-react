import React, { Component } from 'react';

import ContentTitle from './content-title';
import ContentMenu from './content-menu';
import ContentFilter from './content-filter';
import ContentTable from './content-table';

import ApiService from '../services/api-service';

export default class MainPage extends Component {
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
        <ContentTitle />
        <ContentMenu />
        <ContentFilter />
        <ContentTable tasks={tableData}/>
      </div>
      );
  };
};