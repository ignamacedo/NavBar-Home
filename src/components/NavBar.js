import react from 'react'; 
import carro from './carro.png';

export default function NavBar(){ 
    return(
        <div className="nb_conteiner">
           <div className="nb_categorias">
                <ul className="nb_ul">
                    <li className="nb_li">
                        <h3 className="nb_logo">
                            TIENDA E-COMMERCE
                        </h3>
                    </li>
                    <li className="nb_li">
                        <a className="nb_link" href=".">
                            HOME
                        </a>
                    </li>
                    <li className="nb_li">
                        <a className="nb_link" href=".">
                            PRODUCTOS
                        </a>
                    </li>
                    <li class="nb_li">
                        <a className="nb_carro" href=".">
                            <img src={carro} width="27" height="27"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
