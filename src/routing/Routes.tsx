import { Routes, Route, Navigate } from 'react-router-dom';
import SearchPage from '../ui/pages/SearchPage';
import UserPage from '../ui/pages/UserPage';
import { URL_SEARCH, URL_USERS } from './URLs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={URL_SEARCH} />} />
      <Route path={URL_SEARCH} element={<SearchPage />} />
      <Route path={URL_USERS} element={<UserPage />} />

      <Route path="*" element={<div>Page not found, try something else</div>} />
    </Routes>
  );
};

export default AppRoutes;
