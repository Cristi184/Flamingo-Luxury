import './DropButton.css'
import {Link} from "react-router-dom";

const DropButton = (props) => {
    const list = props.list
    const listItems = list.map((item, key) => <Link key={Math.random()} to={'/' + item}>{item}</Link>)
    return (
        <div className="dropdown">
            <button className="dropbtn">{props.title}</button>
            <div className="dropdown-content">
                {listItems}
            </div>
        </div>
    )
}
export default DropButton;