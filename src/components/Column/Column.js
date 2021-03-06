import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.node,
    addCard: PropTypes.func,
  };


  render() {
    const {title, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={settings.defaultColumnIcon}/></span></h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }



}

export default Column;