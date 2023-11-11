//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";


//api
import api from "../../utils/api";


//hooks
import { useEffect, useState } from "react";

function ListaBolo() {

    //JS
    // const ListaBolo = [];

    //React

    // atribui valor JS
    // bolos = [1, 2, 3];


    //bolos => ver o valor

    //setBolos => atribuir um novo valor

    //useState<any[]> => o tipo do valor que pode receber

    //([]) => e o valor inicial 

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() {
        //http://localhost:3000/bolos
        api.get("bolos")
            .then((response) => {
                /*then e quando api da retorno positivo*/

                //atualiza o valor da variavelbolos
                //pelo retorno da api
                setBolos(response.data);
                console.log(response.data);

            })
            .catch((error) => {
                /*catch e quando api da retorno nagativo*/

                console.log(error);
            });
    }

    //Que useffect e acionado quando o componente e inicializado e sofre uma modificacao
    useEffect(() => {
        listarBolos();
    }, [
        //**Monitora um item que sofre uma alteracao */
    ])

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}

            </section>
        </main>
    );
};

export default ListaBolo;