import './App.css';
import TabFormEnseignant from './component/TabForm_enseignant';
import TabFormEtudiant from './component/TabForm_etudiant';
import { Route, Link } from 'react-router-dom';

function App() {
  const Home = () => (
    <div>
      <h2>Gestion des étudiants et enseignants</h2>
    </div>
  );
    
  const Etudiants = () => <TabFormEtudiant />;
  const Enseignants = () => <TabFormEnseignant />;

  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/etudiants">Étudiants</Link>
      <br/>
      <Link to="/enseignants">Enseignants</Link>

      <Route exact path="/" component={Home}/>
      <Route path="/etudiants" component={Etudiants}/>
      <Route path="/enseignants" component={Enseignants}/>
    </div>
  );
}

export default App;
