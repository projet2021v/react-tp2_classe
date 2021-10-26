import { Component } from "react";
import Enseignant from "../entity/Enseignant";
import FormEnseignant from "../form/Form_enseignant";
import TabEnseignant from "../table/Tab_enseignant";

class TabFormEnseignant extends Component {

    constructor(props) {
        super(props);
        this.truc = {
            listeEns : []
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
                            this.truc.listeEns.push(ens);
                            this.setState({listeEns : this.truc.listeEns});
                        }
                    }
                />
                <br/>
                {
                    this.truc.listeEns.length > 0 && 
                    <div>
                        <h2>Nos enseignants</h2>
                        <TabEnseignant tab_data={this.truc.listeEns} />
                    </div>
                    
                }
                
            </div> 
        );
    }

}

export default TabFormEnseignant