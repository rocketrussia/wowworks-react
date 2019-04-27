import React, { Component } from 'react';

class ContentTableItem extends Component {
render() {
    const { id, city, text, date, cash } = this.props;

    return (
    <tr>
      <td>{id}</td>
      <td>{city}</td>
      <td>{text}</td>
      <td>{date}</td>
      <td>{cash}</td>
    </tr>
    );
  };
};
export default ContentTableItem;