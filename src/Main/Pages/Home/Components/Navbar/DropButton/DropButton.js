import './DropButton.css'

const DropButton = (props) => {
    const list = props.list
    const listItems = list.map((item, key) => <a key={Math.random()} href={'/' + item}>{item}</a>)
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