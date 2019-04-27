import React, { Component } from 'react';

import HeaderMenuLinks from './header-menu-links';
import HeaderMenuInfo from './header-menu-info';
import ContentTitle from './content-title';
import ContentMenu from './content-menu';
import ContentFilter from './content-filter';
import ContentTable from './content-table';

import ApiService from '../services/api-service';

class App extends Component {

  render() {

    const apiService = new ApiService();
    // const tableData = apiService.getNewTask();
    const tableData = [
      {
        "id":"12564",
        "city":"Самара",
        "text":"Подключение провода от клеммной коробки пожарной сигнализации к расцепителю, проверить работоспособность",
        "date":"13 августа",
        "cash":"7 021 ₽",
        "personal":"false",
        "night":"true",
        "quick":"false"
      },
      {
        "id":"12565",
        "city":"Волгоград",
        "text":"Установить систему видео-наблюдения с возможностью осуществлять on-line просмотр видеоряда с камер",
        "date":"13 августа",
        "cash":"27 340 ₽",
        "personal":"true",
        "night":"true",
        "quick":"true"
      },
      {
        "id":"12566",
        "city":"Челябинск",
        "text":"Заменить осветительное оборудование в складском помещении со смешанным типом хранения",
        "date":"13 августа",
        "cash":"12 780 ₽",
        "personal":"false",
        "night":"false",
        "quick":"false"
      },
      {
        "id":"12567",
        "city":"Новый Уренгой",
        "text":"Переоборудовать парадный вход. Установить автоматические двери с датчиками движения",
        "date":"13 августа",
        "cash":"150 799 ₽",
        "personal":"true",
        "night":"false",
        "quick":"true"
      }
    ];

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