import { Component } from "react";
import FormEtudiant from "../form/Form_etudiant";

class CompEtudiant extends Component {

    tableauEtudiant() {
        return (
            <table>
                {this.head()}
                {this.body()}
            </table>
        );
    }

    head() {
        return (
            <thead>
                <tr>
                    {this.headContent()}
                </tr>
            </thead>
        );
    }

    headContent() {
        let tabCol = this.props.tab_col ?? [];
        return tabCol.map(
            (c) => <th>{c}</th>
        );
    }

    body() {
        return (
            <tbody>
                {this.bodyContent()}
            </tbody>
        );
    }

    bodyContent() {
        let tabData = this.props.tab_data ?? [];
        return tabData.map(
            (etudiant) => 
                <tr>
                    <td>{etudiant.nom}</td>
                    <td>{etudiant.prenom}</td>
                    <td>{etudiant.age}</td>
                    <td>{etudiant.adresse}</td>
                    <td>{etudiant.classe}</td>
                    <td>{etudiant.nbMatieres}</td>
                </tr>
        );
    }

    render() {
        return (
            this.tableauEtudiant()
        );
    }

}

export default CompEtudiant;