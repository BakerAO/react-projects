import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext'

export default class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => {
                return value === 'english' ? 'Submit'
                : value === 'dutch' ? 'Voorleggen'
                : value === 'spanish' ? 'Enviar'
                : 'no language selected';
              }}
            </LanguageContext.Consumer>
          </button>

        )}
      </ColorContext.Consumer>
    )
  }
}
