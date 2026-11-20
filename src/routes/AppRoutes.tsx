/**
 * Define route sof this application
 * 
 * Author Yamil Bracho
 * 2026-Nov-11
 */


import { Routes, Route } from 'react-router';
import MainPage from '../pages/MainPage';
import CharacterList from '../pages/CharacterList';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<CharacterList />} />
    </Routes>
  )
}
