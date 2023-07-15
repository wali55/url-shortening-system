import { List, Typography } from "antd";

function ListPage({ shortenedUrls }) {
  const { Title } = Typography;

  const styles = {
    root: {
      paddingLeft: 37,
      paddingTop: 100,
      backgroundColor: "#f0f3f2",
      height: "100vh",
    },
    title: { marginBottom: 50 },
  };

  const handleUrlClick = (url) => {
    window.open(url, "_blank");
  };

  const renderedList = shortenedUrls.map((item, index) => {
    return (
      <List.Item key={index}>
        <a href="#" onClick={() => handleUrlClick(item)}>
          {item}
        </a>
      </List.Item>
    );
  });
  return (
    <div style={styles.root}>
      <Title level={2} style={styles.title}>
        List of URLs
      </Title>
      <List>{renderedList}</List>
    </div>
  );
}

export default ListPage;
