import { FC } from "react";
import { Button } from 'react-vant';

const Page1: FC = () => {
  return (
    <div>
      <h1>page1</h1>
      <Button > dd</Button>
      <Button type='primary'>Primary</Button>
      <Button type='info'>Info</Button>
      <Button type='default'>Default</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Dangeer</Button>
      <a href="/page2">去page2</a>
    </div>
  );
};

export default Page1;
