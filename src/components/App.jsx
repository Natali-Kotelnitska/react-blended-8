import { Route, Routes } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { AddContactView } from 'views/AddContactView';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route index element={<HomeView />}></Route>
      <Route path="add" element={<AddContactView />}></Route>
    </Routes>
  );
};
