import React from 'react';
import { FormSearch, FormHome, Label, Input, ButtonSearch, ButtonHome } from './styles';
import { SearchIcon, HomeIcon } from './styles';
import { useState } from 'react';

const Search = ({ setCity, isDay }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <FormHome>
        <ButtonHome type='submit' onClick={() => setCity('London')}><HomeIcon /></ButtonHome>
      </FormHome>
      <FormSearch autoComplete='on' onSubmit={(e) => e.preventDefault()}>
          <Label htmlFor='city'>Search city</Label>
          <Input 
              id='city'
              type='text'
              autoFocus
              autoComplete='on'
              placeholder='Search city'
              value={value}
              onChange={(e) => setValue(e.target.value)}
          />
          <ButtonSearch type='submit' onClick={() => setCity(value)}><SearchIcon /></ButtonSearch>
      </FormSearch>
    </>
  )
}

export default Search