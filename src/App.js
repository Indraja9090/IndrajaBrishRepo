//App.js
import './App.css';
import AadharProfile from './components/aadharProfile';
function App() {
  return (
    <div className="app-container">
      <h1>Snapshot testing on components</h1>
      <AadharProfile
        name="Indraja"
        aadharNumber="1234-5678-9012"
        dob="01-01-1990"
        gender="Female"
      />
    </div>
  );
}

export default App;