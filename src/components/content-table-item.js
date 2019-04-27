import React, { Component } from 'react';
import ApiService from '../services/api-service';
export default class ContentTableItem extends Component {
  
  apiService = new ApiService();

  state = {
    id: null,
    city: null,
    text: null,
    date: null,
    cash: null
  };

  updateTask() {
    this.apiService
      .getNewTask()
      .then((task) => {
        this.setState({
          id: task.id,
          city: task.city,
          text: task.text,
          date: task.date,
          cash: task.cash
        });
      });
  };

  constructor() {
    super();
    this.updateTask();
  }


  render() {

    const { id, city, text, date, cash } = this.state;

    return (
    <tr>
      <td>{id}</td>
      <td>{city}</td>
      <td>{text}</td>
      <td>{date}</td>
      <td>{cash}</td>
    </tr>
    );
  }
};