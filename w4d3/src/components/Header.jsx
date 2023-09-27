import AddItem from "./AddItem";

const Header = ({ addTodo }) => {
    return (
        <div id="myDIV" className="header">
            <h2 style={{ margin: 5 }}>My To Do List</h2>
            <AddItem addTodo={addTodo} />
        </div>
    );
};

export default Header;
