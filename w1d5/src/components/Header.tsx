import AddItem from "./AddItem";
import styles from "./Header.module.css";
const Header = () => {
    const h1Style = {
        color: 'yellow',
        backgroundColor: 'blue',
        fontFamily: 'times new roman'
    }
    const headText = 'This is header from a variable';
    const number = 23;
    const obj = {name: 'Hamid', age: 67}
    const arr = [1, 2, 3, 4, 5]
    return (
        <>
            <h1>{arr[3]} { 33 % 12}</h1>
            <h1 className={styles.header} style={{ color: 'red', backgroundColor: 'black', fontFamily: 'tahoma' }}>
                This is header of our application</h1>
            <h1 style={h1Style}>{ headText + ' ' + number + ' ' + obj.age }</h1>
            <h1 style={h1Style}>{ `${headText}  ${number} ${obj.name}` }</h1>
            <p className={styles.header} style={h1Style}>This is a paragraph</p>
            <div id="myDIV" className="header">
                <h2 style={{ margin: "5px" }}>My To Do List</h2>
                <img src="/images/lab.png" width={100} height={100} />
                <br />
                <AddItem />
            </div>
        </>
    );
}

export default Header;