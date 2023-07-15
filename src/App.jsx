import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EntryPage from "./pages/EntryPage";
import EditPage from "./pages/EditPage";
import ListPage from "./pages/ListPage";
import Header from "./components/Header";

function App() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState([]);

  const shortenUrl = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();
      setShortenedUrl([...shortenedUrl, data.result.full_short_link]);
      
    } catch (error) {
      alert(error);
    }

    setUrl('');
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
              shortenedUrl={shortenedUrl[shortenedUrl.length - 1]}
            />
          }
        />
        <Route path="/edit" element={<EditPage />} />
        <Route
          path="/list"
          element={<ListPage shortenedUrl={shortenedUrl} />}
        />
      </Routes>
    </div>
  );
}

export default App;
