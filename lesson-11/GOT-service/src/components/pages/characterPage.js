import React, {Component} from 'react';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Component {
  gotService = new GotService();

  state = {
    selectedChar: 13,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onItemSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {

    const itemList = (
      <ItemList 
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) =>`${name} (${gender})`} />
    ); 

    const charDetails = (
      <ItemDetails 
        nameList={'character'}
        itemId={this.state.selectedChar}
        getData={this.gotService.getCharacter} >
          <Field field='gender' label='Gender' /> 
          <Field field='born' label='Born' /> 
          <Field field='died' label='Died' /> 
          <Field field='culture' label='Culture' /> 
      </ItemDetails>
    );

    return (
      <RowBlock 
        left = { !this.state.error ? itemList : <ErrorMessage/> }
        right = { !this.state.error ? charDetails : <ErrorMessage/> }
      />
    )
  }
}