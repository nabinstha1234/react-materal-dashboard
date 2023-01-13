import React, { useState } from 'react';

import { TextField, ReactIcon } from 'components/molecules';

const SearchBar = (props) => {
  const [text, setText] = useState('');
  // pefrom gloabl serach opertaion here

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <TextField
      autoComplete="current-password"
      onChange={onChange}
      value={text}
      placeholder="Search people..."
      type="text"
      endAdornment={<ReactIcon height={25} width={25} icon="material-symbols:search-rounded" />}
    />
  );
};

export default SearchBar;
