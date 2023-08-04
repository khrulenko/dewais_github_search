import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Stack, styled, TextField } from '@mui/material';
import { searchUsersByLogin } from '../../../common/api';
import { AppDispatch } from '../../../common/types';
import SearchIcon from '@mui/icons-material/Search';
import { createWrapperStyles, createSearchButtonStyles } from './styles';

const Wrapper = styled(Stack)(createWrapperStyles);
const SearchButton = styled(Button)(createSearchButtonStyles);

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const onType = (event: ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  const onUsersSearch = () => {
    if (!query) return;

    dispatch(searchUsersByLogin(query));
  };

  return (
    <Wrapper>
      <TextField
        value={query}
        onChange={onType}
        placeholder="username..."
        autoComplete="off"
        fullWidth
      />

      <SearchButton onClick={onUsersSearch} variant="outlined">
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;
