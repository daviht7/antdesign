import { Col, Row } from 'antd';
import './index.css';

function App() {
  return (
    <Row gutter={8} justify={'center'}>
      <Col
        xs={24}
        sm={12}
        md={12}
        lg={8}
        className='Column'
      >
        ok
      </Col>
      {/* <Col className='Column' span={3}>
        ok
      </Col>
      <Col className='Column' span={3}>
        ok
      </Col>
      <Col className='Column' span={3}>
        ok
      </Col> */}
    </Row>
  );
}

export default App;
