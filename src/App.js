import { getByTestId } from '@testing-library/dom';
import './App.css';
import CompEnseignant from './component/Comp_enseignant';
import CompEtudiant from './component/Comp_etudiant';
import Enseignant from './entity/Enseignant';
import Etudiant from './entity/Etudiant';
import FormEtudiant from './form/Form_etudiant';

function App() {

  let colEtudiant = [];
  colEtudiant.push("NOM");
  colEtudiant.push("PRÉNOM");
  colEtudiant.push("ÂGE");
  colEtudiant.push("ADRESSE");
  colEtudiant.push("CLASSE");
  colEtudiant.push("NB MATIÈRES");

  let dataEtudiant = [];
  dataEtudiant.push(new Etudiant("nom1", "prenom1", 1, "adresse1", "classe1", 1));
  dataEtudiant.push(new Etudiant("nom2", "prenom2", 2, "adresse2", "classe2", 2));
  dataEtudiant.push(new Etudiant("nom3", "prenom3", 3, "adresse3", "classe3", 3));
  dataEtudiant.push(new Etudiant("nom4", "prenom4", 4, "adresse4", "classe4", 4));
  dataEtudiant.push(new Etudiant("nom5", "prenom5", 5, "adresse5", "classe5", 5));


  let colEnseignant = [];
  colEnseignant.push("NOM");
  colEnseignant.push("PRÉNOM");
  colEnseignant.push("ÂGE");
  colEnseignant.push("ADRESSE");
  colEnseignant.push("POSTE");
  colEnseignant.push("ANCIENNETÉ");

  let dataEnseignant = [];
  dataEnseignant.push(new Enseignant("nom1", "prenom1", 11, "adresse1", "poste1", 11));
  dataEnseignant.push(new Enseignant("nom2", "prenom2", 12, "adresse2", "poste2", 12));
  dataEnseignant.push(new Enseignant("nom3", "prenom3", 13, "adresse3", "poste3", 13));
  dataEnseignant.push(new Enseignant("nom4", "prenom4", 14, "adresse4", "poste4", 14));
  dataEnseignant.push(new Enseignant("nom5", "prenom5", 15, "adresse5", "poste5", 15));
  dataEnseignant.push(new Enseignant("nom6", "prenom6", 16, "adresse6", "poste6", 16));
  dataEnseignant.push(new Enseignant("nom7", "prenom7", 17, "adresse7", "poste7", 17));


  return (
    <div>
      <div>
      <h2>Formulaire ajout étudiant</h2>
        <FormEtudiant liste_etud={dataEtudiant} />
      </div>

      {/* <div>
        <h2>Nos étudiants</h2>
        <CompEtudiant tab_col={colEtudiant} tab_data={dataEtudiant}/>
      </div>
      
      <div>
        <h2>Nos enseignants</h2>
        <CompEnseignant tab_col={colEnseignant} tab_data={dataEnseignant} />
      </div> */}
      
      

    </div>
  );
}

export default App;
