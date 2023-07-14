import { Routes, Route } from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import EditPage from './pages/EditPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/list" element={<ListPage />} />
    </Routes>
  )
}

export default App;
