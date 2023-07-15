function EntryPage({ shortenUrl, url, setUrl, shortenedUrl }) {
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
