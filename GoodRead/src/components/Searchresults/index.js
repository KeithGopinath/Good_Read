import React from 'react';
// import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import GoodReads from '../Goodreads';

const Searchresults = (props) => (
  <li className="image-list">
    {
      <div>
        <img align="left" alt="props.details.title" src={props.details.image} />
        <span align="right" className="title">{props.details.title}</span>
      </div>
    }
  </li>
);


Searchresults.propTypes = {
  // items: PropTypes.array,
  details: PropTypes.object,

};

export default Searchresults;
