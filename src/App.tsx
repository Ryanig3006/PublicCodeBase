import './App.css';
import SideBar from './Components/General/Sidebar/SideBar';
import ExampleContainer from './Containers/ExampleContainer';

function App() {
  return (
    <div className="App">
      <SideBar>
        <ExampleContainer />
      </SideBar>
    </div>
  );
}

export default App;
