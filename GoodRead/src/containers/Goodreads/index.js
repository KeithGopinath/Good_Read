import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchResults } from '../../actionCreators/Goodreads';
import SearchResults from '../../components/Searchresults';
import Goodreads from '../../components/Goodreads';


class GoodreadsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      value: '',

    };
  }

  onSearchHandler = (value) => {
    const { activePage } = this.state;
    this.setState({ value, activePage: 1 }, () => this.props.getSearchresults(value, activePage));
  }

  formatResults = (data) => {
    console.log('data', data);
    if (data) {
      const totalresults = data.querySelector('total-results').innerHTML;
      const results = data.querySelector('results');
      const work = results.querySelectorAll('work');
      const books = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < work.length; i++) {
        console.log(work[i]);
        const bestBook = work[i].querySelector('best_book');
        const bestBookId = bestBook.querySelector('id').innerHTML;
        const title = bestBook.querySelector('title').innerHTML;
        const image = bestBook.querySelector('image_url').innerHTML;
        books.push({
          id: work[i].querySelector('id').innerHTML,
          count: work[i].querySelector('books_count').innerHTML,
          book: work[i].querySelector('best_book').innerHTML,
          bestBookId,
          title,
          image,
        });
      }
      return { books, totalresults };
    }
    return { books: [] };
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber }, () => {
      const { activePage, value } = this.state;
      this.props.getSearchresults(value, activePage);
    });
  }

  render() {
    const { searchresults, isLoading } = this.props;
    const { books, totalresults = 0 } = this.formatResults(searchresults);
    console.log('books', books);
    return (
      <React.Fragment>
        <Goodreads callBack={this.onSearchHandler} isLoading={isLoading} />
        <Row>
          <ul>
            {books && books.map((item, i) => <SearchResults details={item} key={i.toString()} />)}
          </ul>
        </Row>
        {searchresults && <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={totalresults}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { goodreadsState } = state;
  const { searchresults, isLoading } = goodreadsState;
  return {
    searchresults,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSearchresults: bindActionCreators(getSearchResults, dispatch),
  };
}

GoodreadsContainer.propTypes = {
  searchresults: PropTypes.object,
  getSearchresults: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodreadsContainer);
