import './App.css';
import './components/ThankYou';
import './components/ReferralForm';
import {useState} from 'react';
import ReferralForm from './components/ReferralForm';
import CustomerFeedbackForm from './components/CustomerFeedbackForm';
import {Container} from '@mui/material';
function App() {

  const [customer, setCustomer] = useState('');
  
  return (
    <div className="App">
      <Container>
        <CustomerFeedbackForm/>

      </Container>
    </div>
  );
}

export default App;
