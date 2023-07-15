import { Button, Form, Input, Space, Divider, Typography } from "antd";

function EntryPage({ shortenUrl, url, setUrl, shortenedUrls }) {
  const { Text, Title } = Typography;

  const styles = {
    root: { paddingLeft: 37, paddingTop: 100, backgroundColor: '#f0f3f2', height: '100vh' },
    title: { marginBottom: 50 }
  };

  return (
    <div style={styles.root}>
      <Title level={2} style={styles.title}>URL Shortening System</Title>
      <Space>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 700,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onSubmitCapture={shortenUrl}
        >
          <Form.Item
            label="Enter URL"
            name="enterUrl"
            rules={[
              {
                required: true,
                message: "Please enter url!",
              },
            ]}
          >
            <Input
              placeholder="Enter URL"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Space>
      <Divider />
      {shortenedUrls && <Text type="success">{shortenedUrls}</Text>}
      
    </div>
  );
}

export default EntryPage;
