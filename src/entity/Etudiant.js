import Personne from './Personne';

class Etudiant extends Personne {
    constructor(nom, prenom, age, adresse, classe="inconnue", nbMatieres=0) {
        super(nom, prenom, age, adresse);
        this.classe = classe;
        this.nbMatieres = nbMatieres;
    }
}

export default Etudiant;