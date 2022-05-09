import { Col, Row } from 'antd';
import './index.css';

function App() {
  return (
    <Row gutter={10} justify={'center'} align={'middle'}>
      <Col className='Column' span={3}>
        ok
      </Col>
      <Col className='Column' span={3}>
        ok
      </Col>
      <Col className='Column' span={3}>
        ok
      </Col>
      <Col className='Column' span={3}>
        ok
      </Col>
    </Row>
  );
}

export default App;
