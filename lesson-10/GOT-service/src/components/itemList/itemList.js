import React, {Component} from 'react';
import Spinner from '../spinner';
// import ErrorMessage from '../errorMessage';

import styled from 'styled-components';

const ListBlock = styled.ul `
  li {
    cursor: pointer;
  }
`;

export default class ItemList extends Component {
  state = {
    itemList: null,
    loading: true
  }

  componentDidMount() {
    const {getData} = this.props;

    getData()
      .then( (itemList) => {
        this.setState({
          itemList
        })
      })
      .then(this.onCharLoaded)
    ; 
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false
    })
  }

  renderItem(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);

      return (
        <li 
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)} >
          {label}
        </li>
      )
    })
  }

  render() {
    const {itemList, loading} = this.state;

    if (!itemList) {
      return <Spinner/>
    }
    // const spinner = (loading) ? <Spinner/> : null;
    const items = this.renderItem(itemList);

    return (
      <ListBlock className="item-list list-group">
        {/* {spinner} */}
        {items}
      </ListBlock>
    );
  }
}