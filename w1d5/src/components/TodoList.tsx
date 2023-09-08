import ListItem from "./ListItem";

const TodoList = () => {
    return (
        <>
            <ul id="myUL">
                <ListItem name="" value="" task="hit the gym" />
                <ListItem task="pay bills" />
                <ListItem task="meet Aslam" />
                <ListItem task="buy eggs" />
                <ListItem task="read a book" />
            </ul>
        </>
    );
}

export default TodoList;