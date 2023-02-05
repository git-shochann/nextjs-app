import { Alert, Button } from "reactstrap";

const index = () => {
  return (
    <div>
      <div>
        <Alert color="primary">Hello!</Alert>
        <Button color="primary"> Hello from next.js</Button>
      </div>
    </div>
  );
};

export default index;

// 大文字で始まるタグはReactコンポーネント
