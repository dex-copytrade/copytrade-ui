import { Table } from "antd";
import { FC } from "react";
import "./index.less";


const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
  console.log("params", pagination, filters, sorter, extra);
};

interface P {
  columns: any
  data: any
}

const T: FC<P> = (props) => {
  const { columns = [], data =[] } = props
  return (
  
    <Table
      size="small"
      key={Date.now()}
      columns={columns}
      dataSource={data}
      onChange={onChange}
      pagination={false}
    />
  )
};

export default T;
