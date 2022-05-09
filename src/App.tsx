import { Col, Row } from 'antd';
import './index.css';

function App() {
  return (
    <div>
      <Row>
        <Col span={4} className='Column'>
          coluna 1
        </Col>
        <Col span={4} className='Column'>
          22222222222222222222222222222222222222222222222222222222222222222222
        </Col>
        <Col span={4} className='Column'>
          coluna 3
        </Col>
      </Row>
    </div>
  );
}

export default App;
