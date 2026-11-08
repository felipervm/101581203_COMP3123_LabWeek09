import logo from './logo.svg';
import './App.css';

function StudentInfo(props) {
  return (
    <div className="student-info">
      <h1>Welcome to Fullstack Development - I</h1>

      <h2>React JS Programming Week09 Lab exercise</h2>

      <p>{props.studentId}</p>

      <p>{props.studentName}</p>

      <p>George Brown College, Toronto</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="React logo"
        />

        <StudentInfo
          studentId="101581203"
          studentName="Felipe da Rocha Vieira Mattos"
        />
      </header>
    </div>
  );
}

export default App;