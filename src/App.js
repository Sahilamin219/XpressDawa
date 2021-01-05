import logo from './logo.svg';
import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Homepage from "./components/Home/homepage";

import { Route , withRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Homepage/>
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded mr-2" alt="..." />
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
    </div>
  );
}

export default withRouter(App);
