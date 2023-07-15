function ListPage({ shortenedUrl }) {
    console.log(shortenedUrl)
    const renderedList = shortenedUrl.map((item, index) => {
        return(
            <li key={index}>
                {item}
            </li>
        );
    });
    return(
        <div>
            <h2>List of urls</h2>
            <ul>
                {renderedList}
            </ul>
        </div>
    );
}

export default ListPage;