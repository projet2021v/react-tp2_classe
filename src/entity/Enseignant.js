import Personne from './Personne';

class Enseignant extends Personne {
    constructor(nom, prenom, age, adresse, poste="inconnu", anciennete=0) {
        super(nom, prenom, age, adresse);
        this.poste = poste;
        this.anciennete = anciennete;
    }
}

export default Enseignant;