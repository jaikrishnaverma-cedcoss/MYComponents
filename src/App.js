import './App.css';
import Card1 from './Cards/Card1/Card1';

function App() {
  return (
  <div className='m1'>
  <Card1 title="Mark_Card01" para="card with module exist for reuse" faClass="fa fa-superpowers" count="01" color="green"/>
  <Card1 title="Mark_Card01" para="card with module exist for reuse" faClass="fa fa-superpowers" count="01" />
  <Card1 title="Mark_Card01" para="card with module exist for reuse" faClass="fa fa-superpowers" count="01" color="#0989f9"/>
  </div>
  );
}

export default App;
