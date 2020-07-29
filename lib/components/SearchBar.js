import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends React.Component {
	state = {
		searchTerm : ''
	};  
	
	//debaunce the action of state after 300ms locally here
	doSearch = debounce(() => {
		this.props.store.setSearchTerm(this.state.searchTerm);
	}, 300)
	
	// setState has 2nd argument after the setting the state 
	handleSearch = (e) => {
		this.setState({ searchTerm : e.target.value}, ()=>{
			this.doSearch();			
		});
	}
	
	render(){
		return (<input 		
			type="search"
			placeholder = "Enter search term"
			value = {this.state.searchTerm}
			onChange={this.handleSearch}		
		/>	);		
			
	}
}

export default storeProvider()(SearchBar);