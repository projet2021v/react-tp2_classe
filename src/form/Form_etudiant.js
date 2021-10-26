import React, { Component } from 'react';
import Etudiant from '../entity/Etudiant';


class FormEtudiant extends Component {

    constructor(props) {
        super(props);
        this.truc = {
            etudiant : new Etudiant()
        };
    }

    onChange = (e) => {
        let name = e.target.name;
        this.truc.etudiant[name] = e.target.value;
        this.setState({etudiant : this.truc.etudiant});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.ajoutEtudiant(this.truc.etudiant);
    }  

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="nom">Nom : </label>
                    <input type="text" id="nom" name="nom" onChange={this.onChange} value={this.truc.etudiant.nom} /><br/><br/>
                    
                    <label htmlFor="prenom">Prénom : </label>
                    <input type="text" id="prenom" name="prenom" onChange={this.onChange} value={this.truc.etudiant.prenom} /><br/><br/>
                    
                    <label htmlFor="age">Âge : </label>
                    <input type="number" id="age" name="age" onChange={this.onChange} value={this.truc.etudiant.age} /><br/><br/>
                    
                    <label htmlFor="adresse">Adresse : </label>
                    <input type="text" id="adresse" name="adresse" onChange={this.onChange} value={this.truc.etudiant.adresse} /><br/><br/>
                    
                    <label htmlFor="classe">Classe : </label>
                    <input type="text" id="classe" name="classe" onChange={this.onChange} value={this.truc.etudiant.classe} /><br/><br/>
                    
                    <label htmlFor="nbMatieres">Nb de matières : </label>
                    <input type="number" id="nbMatieres" name="nbMatieres" onChange={this.onChange} value={this.truc.etudiant.nbMatieres} /><br/><br/>

                    <button type="submit">Ajouter</button>
                </form>
            </div>
        );
    }
}

export default FormEtudiant;