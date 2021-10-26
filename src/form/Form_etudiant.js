import React, { Component } from 'react';
import Etudiant from '../entity/Etudiant';
import CompEtudiant from '../component/Comp_etudiant';


class FormEtudiant extends Component {

    constructor(props) {
        super(props);
        this.truc = {
            etudiant : new Etudiant(),
            liste : []
        };
    }

    onChangeNom = (e) => {
        let newEtudiant = this.truc.etudiant;
        newEtudiant.nom = e.target.value;
        this.setState({etudiant : newEtudiant});
    }

    onChangePrenom = (e) => {
        let newEtudiant = this.truc.etudiant;
        newEtudiant.prenom = e.target.value;
        this.setState({etudiant : newEtudiant});
    }

    onChangeAge = (e) => {
        let newEtudiant = this.truc.etudiant;
        newEtudiant.age = e.target.value;
        this.setState({etudiant : newEtudiant});
    }

    onChangeAdresse = (e) => {
        let newEtudiant = this.truc.etudiant;
        newEtudiant.adresse = e.target.value;
        this.setState({etudiant : newEtudiant});
    }

    onChangeClasse = (e) => {
        let newEtudiant = this.truc.etudiant;
        newEtudiant.classe = e.target.value;
        this.setState({etudiant : newEtudiant});
    }

    onChangeNbMatieres = (e) => {
        let newEtudiant = this.truc.etudiant;
        newEtudiant.nbMatieres = e.target.value;
        this.setState({etudiant : newEtudiant});
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.truc.liste = this.props.liste_etud ?? [];
        
        this.truc.liste.push(new Etudiant(
            this.truc.etudiant.nom,
            this.truc.etudiant.prenom,
            this.truc.etudiant.age,
            this.truc.etudiant.adresse,
            this.truc.etudiant.classe,
            this.truc.etudiant.nbMatieres
        ));

        console.log(this.truc.liste);
    }  

    render() {
        let colEtudiant = [];
        colEtudiant.push("NOM");
        colEtudiant.push("PRÉNOM");
        colEtudiant.push("ÂGE");
        colEtudiant.push("ADRESSE");
        colEtudiant.push("CLASSE");
        colEtudiant.push("NB MATIÈRES");

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label for="nom">Nom : </label>
                    <input type="text" id="nom" onChange={this.onChangeNom} value={this.truc.etudiant.nom} /><br/><br/>
                    
                    <label for="prenom">Prénom : </label>
                    <input type="text" id="prenom" onChange={this.onChangePrenom} value={this.truc.etudiant.prenom} /><br/><br/>
                    
                    <label for="age">Âge : </label>
                    <input type="number" id="age" onChange={this.onChangeAge} value={this.truc.etudiant.age} /><br/><br/>
                    
                    <label for="adresse">Adresse : </label>
                    <input type="text" id="adresse" onChange={this.onChangeAdresse} value={this.truc.etudiant.adresse} /><br/><br/>
                    
                    <label for="classe">Classe : </label>
                    <input type="text" id="classe" onChange={this.onChangeClasse} value={this.truc.etudiant.classe} /><br/><br/>
                    
                    <label for="nbMatieres">Nb de matières : </label>
                    <input type="number" id="nbMatieres" onChange={this.onChangeNbMatieres} value={this.truc.etudiant.nbMatieres} /><br/><br/>

                    <button type="submit">Ajouter</button>
                </form>
                
                <CompEtudiant tab_col={colEtudiant} tab_data={this.truc.liste}/>
            </div>
        );
    }
}

export default FormEtudiant;