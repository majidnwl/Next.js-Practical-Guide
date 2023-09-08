import Header from "@/components/Header";
import TodoList from "@/components/TodoList";

export default function Home() {
  const student = {
    name: 'Usman Ali',
    fName: 'Haji Ghulam',
    age: 16,
    roll: 28,
    marks: 58.43,
    id: 123456789
  }

  // if (student.age > 18) {
  //   console.log('greater than 18')
  // } else {
  //   console.log('less than 18')
  // }

  // student.age >= 18 ? console.log('greater than 18') : console.log('less than 18')

  if (student.marks >= 50) {
    return (
      <main>
        <p
          style={student.age >= 18 ? { color: 'green' } : { color: 'yellow' }}
        >Name: {student.name.toUpperCase()}</p>
        <p className={student.age >= 18 ? 'greenP' : 'yellowP'}
        >Fater Name: {student.fName.toLowerCase()}</p>
        <p>Age: {student.age}</p>
        <p>Roll Number: {student.roll}</p>
        <p>Marks: {Math.ceil(student.marks)}</p>
        <p>{student.age >= 18 ? 'CNIC:' : 'B Form:'} {student.id}</p>

        <Header />
        <TodoList />
      </main>
    );
  } else return;
}
