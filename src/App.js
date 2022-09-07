import './App.css';
import Cake from './components/Cake';
import HooksCakeCotainer from './components/HooksCakeCotainer';
import {Provider} from 'react-redux'
import  Store  from './redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
    <Cake/>
    <HooksCakeCotainer/>
    </div>
    </Provider>
  );
}


export default App;
