import Form from './components/Form/Form';
import './App.css';
import { useSelector } from 'react-redux';
import { ContactsList } from './components/ContactList/ContactsList';
import { SearchForm } from './components/SearchForm/SearchForm';
import { SearchList } from './components/SearchList/SearchList';

function App() {
  const select = useSelector(state => state.user.filter);
  console.log('App: ', select);

  return (
    <div className="App">
      <Form />
      <h2 className="contacts-title">Contacts</h2>
      <SearchForm />
      {select ? <SearchList /> : <ContactsList />}
    </div>
  );
}

export default App;
