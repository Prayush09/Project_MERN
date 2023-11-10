import { useNavigate } from "react-router-dom";

function List(props) {
  function list(arr) {
    
    return arr.map((item, index) => {
      return (
        <li
          key={index}
          className="list-group-item px-3 border-0 rounded-3 list-group-item-dark mb-2">
          {item}
        </li>
      );
    });
  }
  return <>{list(props.arr)}</>;
}
export { List };
