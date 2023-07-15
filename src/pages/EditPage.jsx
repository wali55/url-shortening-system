import { List, Input, Button, Divider, Typography } from "antd";

function EditPage({ shortenedUrls, setShortenedUrls }) {
  const { Title } = Typography;

  const styles = {
    root: {
      paddingTop: 100,
      backgroundColor: "#f0f3f2",
      height: "100vh",
    },
    title: { marginBottom: 50, paddingLeft: 37 },
  };

  const handleDelete = (index) => {
    const updatedShortenedUrls = [...shortenedUrls];
    updatedShortenedUrls.splice(index, 1);

    setShortenedUrls(updatedShortenedUrls);
  };

  const handleEdit = (index, newUrl) => {
    const updatedShortenedUrls = [...shortenedUrls];
    updatedShortenedUrls[index] = newUrl;

    setShortenedUrls(updatedShortenedUrls);
  };

  const renderedList = shortenedUrls.map((item, index) => (
    <List key={index}>
      <List.Item>
        <p>Short URL: {item}</p>
        <Divider type="vertical" />
        <Input
          type="text"
          value={item}
          onChange={(event) => handleEdit(index, event.target.value)}
        />
        <Divider type="vertical" />
        <Button type="primary" danger onClick={() => handleDelete(index)}>
          Delete
        </Button>
      </List.Item>
    </List>
  ));

  return (
    <div style={styles.root}>
      <Title level={2} style={styles.title}>
        Edit URLs
      </Title>
      <ul>{renderedList}</ul>
    </div>
  );
}

export default EditPage;
