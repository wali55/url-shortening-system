import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import EditPage from './pages/EditPage';
import ListPage from './pages/ListPage';
import Header from './components/Header';

function App() {
  const [url, setUrl] = useState([]);
  const [shortenedUrls, setShortenedUrls] = useState([]);

  // Load the saved shortened URLs from local storage
  useEffect(() => {
    const savedShortenedUrls = JSON.parse(localStorage.getItem("shortenedUrls"));
    
    if (savedShortenedUrls) {
      setShortenedUrls(savedShortenedUrls);
    }
  }, []);

  // Save the shortened URLs to local storage
  useEffect(() => {
    localStorage.setItem("shortenedUrls", JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const shortenUrl = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();
      setShortenedUrls([...shortenedUrls, data.result.full_short_link]);
    } catch (error) {
      alert(error);
    }

    setUrl("");
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <EntryPage
              shortenUrl={shortenUrl}
              url={url}
              setUrl={setUrl}
              shortenedUrls={shortenedUrls[shortenedUrls.length - 1]}
            />
          }
        />
        <Route path="/edit" element={<EditPage shortenedUrls={shortenedUrls} setShortenedUrls={setShortenedUrls} url={url} />} />
        <Route
          path="/list"
          element={<ListPage shortenedUrls={shortenedUrls} />}
        />
      </Routes>
    </div>
  );
}

export default App;
