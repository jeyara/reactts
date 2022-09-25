import logo from './logo.svg';
import './App.css';
import './Components/DialogComponent/dialogData'

import CustomDialog from './Components/DialogComponent'



function App() {

  const arr = [
    { friendlyName: "Invoice Number", fieldName: "InvoiceNumber",  extractedValue: "43026"},
    { friendlyName: "Invoice Date", fieldName: "InvoiceDate",  extractedValue: "22/10/2019"},
    { friendlyName: "PO Number", fieldName: "PONumber",  extractedValue: "TS2302"},
  ];

  return (
   

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <CustomDialog title='Extraction' message='Please verify the extracted data!!' canonicals = {arr} />
      </header>
    </div>
  );
}

export default App;
