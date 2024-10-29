import * as Icon from "react-bootstrap-icons";
import "./Tile.css";

const xIcon = <Icon.X size="55" className="icon-x" />;
const oIcon = <Icon.Circle size="40" className="icon-o" />;

function Tile({ className, value, onClick }) {
  return (
    <div onClick={onClick} className={`tile ${className}`}>
      {
          // se o valor for 'x': value = xIcon
        value == "x" ? xIcon :
        // senão, então, se o valor for 'o': value = oIcon, do contrário há um erro
        value == "o" ? oIcon : null
      }
    </div>
  );
}

export default Tile;
