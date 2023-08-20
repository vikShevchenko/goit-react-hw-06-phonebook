import Form from './components/Form/Form';
import './App.css';
import { ContactsList } from './components/ContactList/ContactsList';
import { SearchForm } from './components/SearchForm/SearchForm';

function App() {

  return (
    <div className="App">
      <Form />
      <h2 className="contacts-title">Contacts</h2>
      <SearchForm />
      <ContactsList />
    </div>
  );
}

export default App;
