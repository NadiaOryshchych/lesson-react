import React from 'react';

import { Button } from 'reactstrap';

import styled from 'styled-components';

const AddFormBlock = styled.div`
  display: flex;
  margin-top: 20px;
  input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`;

const PostAddForm = ({onAdd}) => {
  return (
    <AddFormBlock>
      <input
          type='text'
          placeholder='О чем вы думаете сейчас?'
          className='form-control'
      />
      <Button
        outline color = 'secondary'
        type='submit'
        className='btn'
        onClick={() => onAdd('Hello')}>
          Добавить
      </Button>
    </AddFormBlock>
  )
}

export default PostAddForm;