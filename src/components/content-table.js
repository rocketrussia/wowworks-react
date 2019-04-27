import React, { Component } from 'react';
import ApiService from '../services/api-service'

import ContentTableItem from './content-table-item';

export default class ContentTable extends Component {

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
      <div className="container content__table">
      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Город</th>
          <th>Название</th>
          <th>Выполнить до</th>
          <th>Сумма</th>
        </tr>
        <tr>
          <td><ContentTableItem /></td>
          <td>Самара</td>
          <td>Подключение провода от клеммной коробки пожарной сигнализации к расцепителю, проверить работоспособность</td>
          <td>13 августа</td>
          <td>7 021 ₽</td>
        </tr>
        <tr>
          <td>12565</td>
          <td>Волгоград</td>
          <td>Установить систему видео-наблюдения с возможностью осуществлять on-line просмотр видеоряда с камер</td>
          <td>13 августа</td>
          <td>27 340 ₽</td>
        </tr>
        <tr>
          <td>12566</td>
          <td>Челябинск</td>
          <td>Заменить осветительное оборудование в складском помещении со смешанным типом хранения</td>
          <td>13 августа</td>
          <td>12 780 ₽</td>
        </tr>
        <tr>
          <td>{id}</td>
          <td>{city}</td>
          <td>{text}</td>
          <td>{date}</td>
          <td>{cash}</td>
        </tr>
        </tbody>
      </table>
      </div>
    );
  }
};