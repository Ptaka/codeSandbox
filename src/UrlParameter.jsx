import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const q = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameter</h1>
      <p>idは{id}</p>
      <p>qは{q.get("name")}</p>
    </div>
  );
};
