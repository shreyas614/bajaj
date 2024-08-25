
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import TextInput from './components/TextInput';
import FilterDropdown from './components/FilterDropdown';
import ResponseDisplay from './components/ResponseDisplay';
import { submitData } from './services/apiService';
import { isValidJSON } from './utils/jsonValidator';
import './App.css';

const App = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
      if (!isValidJSON(jsonInput)) {
          setError('Invalid JSON input');
          return;
      }

      try {
          const parsedData = JSON.parse(jsonInput);
          const data = await submitData(parsedData);
          setResponseData(data);
          setError('');
      } catch (err) {
          setError('Error fetching data from API');
      }
  };

  return (
      <div className="container mt-5">
          <h1 className="text-center mb-4">21BCE1314</h1>
          <div className="row mb-3">
              <div className="col-md-6 offset-md-3">
                  <TextInput jsonInput={jsonInput} setJsonInput={setJsonInput} />
              </div>
          </div>
          <div className="text-center mb-3">
              <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {responseData && (
              <>
                  <FilterDropdown selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
                  <ResponseDisplay responseData={responseData} selectedOptions={selectedOptions} />
              </>
          )}
      </div>
  );
};

export default App;