import React from 'react';

class Calculator extends React.Component {

    render() {
        return (
            <div>
                <button>Oeuf</button>
                <button>Tomate</button>
                <button>Courgette</button>
                <button>Poire</button><br /><br />
                Tomate<br />
                <input type="text" value="123" placeholder="Quantité ..." /><br />
                <button>Ajouter au plat</button><br />
                <p>
                    140 Kcal
                </p>
                <button>Retour</button>
            </div>
        );
    }
}


export default Calculator;
