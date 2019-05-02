import React, { Component } from 'react';

class ContentFilter extends Component {

  state = {
    personal: false,
    night: false,
    quick: false
  };

  onClickPersonal = (e) => {
    const {onPersonalChange = () => {}} = this.props;
    this.setState({
      personal: !this.state.personal 
    });

    onPersonalChange({ personal: !this.state.personal, night: this.state.night, quick: this.state.quick });
  };

  onClickNight = (e) => {
    const {onNightChange = () => {}} = this.props;
    this.setState({
      night: !this.state.night 
    });

    onNightChange({ personal: this.state.personal, night: !this.state.night, quick: this.state.quick });
  };

  onClickQuick = (e) => {
    const {onQuickChange = () => {}} = this.props;
    this.setState({
      quick: !this.state.quick 
    });

    onQuickChange({ personal: this.state.personal, night: this.state.night, quick: !this.state.quick });
  };

  render () {
    return (
      <div className="content__filter">
        <li>
          <input type="checkbox" 
                  id="person" 
                  name="person"
                  value={this.state.personal}
                  onChange={this.onClickPersonal} />
          <label htmlFor="person" 
                  className="content__filter__checkmark">
                  Персональное</label>
        </li>
        <li>
          <input type="checkbox" 
                  id="night" 
                  name="night"
                  value={this.state.night}
                  onChange={this.onClickNight} />
          <label htmlFor="night" 
                  className="content__filter__checkmark">
                  Ночное</label>
        </li>
        <li>
          <input type="checkbox" 
                  id="quick" 
                  name="quick"
                  value={this.state.quick}
                  onChange={this.onClickQuick} />
          <label htmlFor="quick" 
                  className="content__filter__checkmark">
                  Срочное</label>
        </li>
        <div className="content__select">
          <select>
            <option>Никита Ласточкин</option>
            <option>Геннадий Орлов</option>
            <option>Валерий Чайкин</option>
          </select>
        </div>
      </div>
    );
  }
};

export default ContentFilter;