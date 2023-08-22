import { ChangeEvent, useState, KeyboardEvent, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Stack, styled, TextField } from '@mui/material';
import { searchUsersByLogin } from '../../../common/api';
import { AppDispatch } from '../../../common/types';
import SearchIcon from '@mui/icons-material/Search';
import { createWrapperStyles, createSearchButtonStyles } from './styles';
import useValidation from '../../../common/hooks/useValidation';
import schema from './schema';
import { isObjEmpty } from '../../../common/utils';

const Wrapper = styled(Stack)(createWrapperStyles);
const SearchButton = styled(Button)(createSearchButtonStyles);

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const onTyping = (event: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }

    setQuery(event.target.value);
  };

  const onUsersSearch = () => {
    if (!isObjEmpty(validation)) {
      setError(true);
      return;
    }

    dispatch(searchUsersByLogin(query));
  };

  const onUserKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      onUsersSearch();
    }
  };

  const validationData = useMemo(() => ({ query }), [query]);
  const validation = useValidation(validationData, schema);

  return (
    <Wrapper>
      <TextField
        value={query}
        onChange={onTyping}
        onKeyDown={onUserKeyDown}
        placeholder="username..."
        autoComplete="off"
        helperText={error && validation.query}
        error={error}
        fullWidth
      />

      <SearchButton onClick={onUsersSearch} variant="outlined">
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  );
};

export default SearchBar;
