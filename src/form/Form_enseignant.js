import { Component } from "react";
import Enseignant from "../entity/Enseignant";

class FormEnseignant extends Component {

    constructor(props) {
        super(props);
        this.truc = {
            enseignant : new Enseignant()
        }
    }

    onChange = (e) => {
        let name = e.target.name;
        this.truc.enseignant[name] = e.target.value;
        this.setState({etudiant : this.truc.enseignant});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.ajoutEnseignant(this.truc.enseignant);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="nom">Nom : </label>
                    <input type="text" id="nom" name="nom" onChange={this.onChange} value={this.truc.enseignant.nom} /><br/><br/>
                    
                    <label htmlFor="prenom">Prénom : </label>
                    <input type="text" id="prenom" name="prenom" onChange={this.onChange} value={this.truc.enseignant.prenom} /><br/><br/>
                    
                    <label htmlFor="age">Âge : </label>
                    <input type="number" id="age" name="age" onChange={this.onChange} value={this.truc.enseignant.age} /><br/><br/>
                    
                    <label htmlFor="adresse">Adresse : </label>
                    <input type="text" id="adresse" name="adresse" onChange={this.onChange} value={this.truc.enseignant.adresse} /><br/><br/>
                    
                    <label htmlFor="poste">Poste : </label>
                    <input type="text" id="poste" name="poste" onChange={this.onChange} value={this.truc.enseignant.poste} /><br/><br/>
                    
                    <label htmlFor="anciennete">Ancienneté : </label>
                    <input type="number" id="anciennete" name="anciennete" onChange={this.onChange} value={this.truc.enseignant.anciennete} /><br/><br/>

                    <button type="submit">Ajouter</button>
                </form>
            </div>
        );
    }

}

export default FormEnseignant;