import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

class Goodreads extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  searchBarHandle = () => {
    const { value } = this.state;
    this.props.callBack(value);
  }

  render() {
    const { value } = this.state;
    const { isLoading } = this.props;
    return (
      <div className="input">
        <h1>GoodReads</h1>
        <Col md={2}>
          <input type="text" value={value} onChange={this.handleChange} />
        </Col>
        <Col>
          <button onClick={this.searchBarHandle}>Search</button>
        </Col>
        {isLoading && <Loader
          type="Bars"
          color="#somecolor"
          height={70}
          width={70}
        />}
      </div>
    );
  }
}

Goodreads.propTypes = {
  callBack: PropTypes.func,
  isLoading: PropTypes.bool,
};


export default Goodreads;
