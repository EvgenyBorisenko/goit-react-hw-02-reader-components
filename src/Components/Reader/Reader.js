import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

class Reader extends Component {
  state = {
    title: this.props.items[0].title,
    text: this.props.items[0].text,
    currentPublication: 0,
    allPublication: Number(this.props.items.length),
  };

  onPreviousArticle = () => {
    const { items } = this.props;
    this.setState(prevState => ({
      title: items[prevState.currentPublication - 1].title,
      text: items[prevState.currentPublication - 1].text,
      currentPublication: prevState.currentPublication - 1,
    }));
  };

  onNextArticle = () => {
    const { items } = this.props;
    this.setState(prevState => ({
      title: items[prevState.currentPublication + 1].title,
      text: items[prevState.currentPublication + 1].text,
      currentPublication: prevState.currentPublication + 1,
    }));
  };

  render() {
    const { title, text, currentPublication, allPublication } = this.state;
    return (
      <div className="reader">
        <Publication title={title} text={text} />
        <Counter
          currentPublication={currentPublication}
          allPublication={allPublication}
        />
        <Controls
          onPreviousArticle={this.onPreviousArticle}
          onNextArticle={this.onNextArticle}
          currentPublication={currentPublication}
          allPublication={allPublication}
        />{' '}
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Reader;
