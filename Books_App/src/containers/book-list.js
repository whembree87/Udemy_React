import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectedBook } from "../actions";
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBooK(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
      books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { selectBooK: selectedBook }, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);