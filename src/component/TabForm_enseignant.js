import { Component } from "react";
import Enseignant from "../entity/Enseignant";
import FormEnseignant from "../form/Form_enseignant";
import TabEnseignant from "../table/Tab_enseignant";

class TabFormEnseignant extends Component {

    constructor(props) {
        super(props);
        this.truc = {
            listeEnseignants : []
        };
    }

    componentDidMount() {
        console.log("Montage du composant ENSEIGNANT");
    }

    componentWillUnmount() {
        console.log("Démontage du composant ENSEIGNANT");
    }

    render() {
        return (
            <div>
                <h2>Ajoutez un enseignant</h2>
                <FormEnseignant 
                    ajoutEnseignant = {
                        (enseignant) => {
                            let ens = new Enseignant();
                            Object.assign(ens, enseignant);
                            this.truc.listeEnseignants.push(ens);
                            this.setState({listeEns : this.truc.listeEnseignants});
                        }
                    }
                />
                <br/>
                {
                    this.truc.listeEnseignants.length > 0 && 
                    <div>
                        <h2>Nos enseignants</h2>
                        <TabEnseignant tab_data={this.truc.listeEnseignants} />
                    </div> 
                }  
            </div> 
        );
    }
}

export default TabFormEnseignant