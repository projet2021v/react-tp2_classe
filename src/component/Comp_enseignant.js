import { Component } from "react";

class CompEnseignant extends Component {

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

export default CompEnseignant;