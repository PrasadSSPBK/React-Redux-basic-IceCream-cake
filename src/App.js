import './App.css';
import Cake from './components/Cake';
import HooksCakeCotainer from './components/HooksCakeCotainer';
import {Provider} from 'react-redux'
import  Store  from './redux/Store';
import  IceCream  from './components/IceCream';
import HooksIceCream from './components/HooksIceCream';

function App() {
  return (
    <Provider store={Store}>
    <div className="App bg-dark m-2">
      <h1 className='text-danger fw-bold'>REACT_REDUX BASIC</h1>
      <div className='container'>
      <div className='row'>
        <div className='col-6'>
        <Cake/>
        </div>
        <div className='col-6'>
        <IceCream/>
        </div>
        <div className='col-6'>
        <HooksCakeCotainer/>
        </div>
        <div className='col-6'>
      <HooksIceCream/>
        </div>
      </div>
    </div>
   
   
    
    </div>
    </Provider>
  );
}


export default App;
