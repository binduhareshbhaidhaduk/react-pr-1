import Card from './components/Card/Card';
import users from './components/Data/Data';
import './App.css';

function App() {
  return (
    <div className="App">
      {users.map(user => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
