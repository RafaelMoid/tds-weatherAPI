import React,{Fragment} from "react";
import axios from "axios";

function Dallol(){
    return(
        <Fragment>
            <h3 className="title">Dallol(NG)</h3>
            <br/>
            <p>clima atual</p>
            <p>temperatura</p>
            <ul className="listaHora">
                <li>dawn</li>
                <li>morning</li>
                <li>afternoon</li>
                <li>night</li>
            </ul>
            <ul className="listaDados">
                <li>wind speed</li>
                <li>sunrise</li>
                <li>sunset</li>
                <li>humidity</li>
            </ul>
        </Fragment>
    );
}

export default Dallol;