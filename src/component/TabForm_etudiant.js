import { Component } from "react";
import Etudiant from "../entity/Etudiant";
import FormEtudiant from "../form/Form_etudiant";
import TabEtudiant from "../table/Tab_etudiant";

class TabFormEtudiant extends Component {

    constructor(props) {
        super(props);
        this.truc = {
            listeEtudiants : []
        }
    }

    componentDidMount() {
        console.log("Montage du composant ÉTUDIANT");
    }

    componentWillUnmount() {
        console.log("Démontage du composant ÉTUDIANT");
    }

    render() {
        return (
            <div>
                <h2>Ajoutez un étudiant</h2>
                <FormEtudiant
                    ajoutEtudiant = {
                        (etudiant) => {
                            let et = new Etudiant();
                            Object.assign(et, etudiant);
                            this.truc.listeEtudiants.push(et);
                            this.setState({listeEtudiants : this.truc.listeEtudiants});
                        }
                    }
                />
                <br/>
                {
                    this.truc.listeEtudiants.length > 0 &&
                    <div>
                        <h2>Nos étudiants</h2>
                        <TabEtudiant tab_data = {this.truc.listeEtudiants} />
                    </div>
                }
            </div>
        );
    }

}

export default TabFormEtudiant;