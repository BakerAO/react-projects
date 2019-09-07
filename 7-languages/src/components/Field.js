import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name'
      : this.context === 'dutch' ? 'Naam'
      : this.context === 'spanish' ? 'Nombre'
      : 'no language selected';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}
