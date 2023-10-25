import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/100">100へ</Link>
      <br />
      <Link to="/page2/100?name=hogege">クエリパラメタ</Link>
    </div>
  );
};
