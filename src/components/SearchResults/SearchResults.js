import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.node,
    cards: PropTypes.node,
  };

  static defaultProps = {
    title: settings.search.defaultText,
    icon: settings.search.icon,
  };

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon}/></span></h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }



}

export default SearchResults;