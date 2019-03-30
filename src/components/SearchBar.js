import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    onInputChante = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Get a five-day forecast in your favorite cities in Brazil"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChante}
                    name="term"
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

export default connect(null, {fetchWeather})(SearchBar);
