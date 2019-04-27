import React from 'react';
import ContentTableItem from './content-table-item';

const ContentTable = () => {
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
        <td>12564</td>
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
      <ContentTableItem />
      </tbody>
    </table>
    </div>
  );
};

export default ContentTable;