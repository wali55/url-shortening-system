import { useState } from 'react';

function EntryPage() {
  const [url, setUrl] = useState();
  const [shortenedUrl, setShortenedUrl] = useState('');

  const shortenUrl = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );

      const data = await response.json();
      setShortenedUrl(data.result.full_short_link);
    }
    catch(error) {
      alert(error);
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={shortenUrl}>
        <input 
        placeholder="Enter URL"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        />
      </form>
      {shortenedUrl &&
      <div>
        {shortenedUrl}
      </div>
      }
    </div>
  )
}

export default EntryPage;
