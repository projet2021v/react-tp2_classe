import { Component } from "react";

class TabEnseignant extends Component {

    tableauEnseignant() {
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
        let colEnseignant = [];
        colEnseignant.push("NOM");
        colEnseignant.push("PRÉNOM");
        colEnseignant.push("ÂGE");
        colEnseignant.push("ADRESSE");
        colEnseignant.push("POSTE");
        colEnseignant.push("ANCIENNETÉ");
        
        return colEnseignant.map(
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
            (enseignant) => 
                <tr>
                    <td>{enseignant.nom}</td>
                    <td>{enseignant.prenom}</td>
                    <td>{enseignant.age}</td>
                    <td>{enseignant.adresse}</td>
                    <td>{enseignant.poste}</td>
                    <td>{enseignant.anciennete}</td>
                </tr>
        );
    }

    render() {
        return (
            this.tableauEnseignant()
        );
    }
}

export default TabEnseignant;