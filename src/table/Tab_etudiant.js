import { Component } from "react";

class TabEtudiant extends Component {

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
        let colEtudiant = [];
        colEtudiant.push("NOM");
        colEtudiant.push("PRÉNOM");
        colEtudiant.push("ÂGE");
        colEtudiant.push("ADRESSE");
        colEtudiant.push("CLASSE");
        colEtudiant.push("NB MATIÈRES");

        return colEtudiant.map(
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

export default TabEtudiant;