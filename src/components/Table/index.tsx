import { Table } from 'antd';
import { FC } from "react";
import './index.less'

const columns = [
  {
    title: '仓位',
    dataIndex: 'name',
  },
  {
    title: '入场价格',
    dataIndex: 'age',
  },
  {
    title: '合约数量',
    dataIndex: 'address',
  },
  {
    title: '开仓时间',
    dataIndex: 'address',
  },
  {
    title: '未结盈亏',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App = () => <Table size='small' columns={columns} dataSource={data} onChange={onChange} pagination={false} />;

export default App;