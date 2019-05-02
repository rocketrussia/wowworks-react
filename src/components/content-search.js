import React, { Component } from 'react';

class ContentSearch extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <div className="content__filter">
        <input type="text" 
        placeholder="Поиск по слову"
        value={this.state.term} 
        onChange={this.onTermChange}
        />
      </div>
    );
  }
}
export default ContentSearch;