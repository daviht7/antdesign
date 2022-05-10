import { Col, Row, Typography } from 'antd';
import './index.css';

function App() {
  return (
    <Row gutter={8} justify={'center'}>
      <Col span={12}>
        <Typography.Title level={1}>
          nivel 1
        </Typography.Title>
        <Typography.Title level={2}>
          nivel 2
        </Typography.Title>
        <Typography.Title level={3}>
          nivel 3
        </Typography.Title>
        <Typography.Title level={4}>
          nivel 4
        </Typography.Title>
        <Typography.Title level={5}>
          nivel 5
        </Typography.Title>
      </Col>
    </Row>
  );
}

export default App;
