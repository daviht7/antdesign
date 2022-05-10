import { Col, Row, Table } from 'antd';
import { User, UserService } from 'daviht7-sdk';
import { useEffect, useState } from 'react';
import './index.css';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

function App() {
  const [users, setUsers] = useState<User.Summary[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then(setUsers);
  }, []);

  return (
    <Row gutter={8} justify={'center'}>
      <Col span={12}>
        <Table dataSource={users} columns={columns} />;
      </Col>
    </Row>
  );
}

export default App;
