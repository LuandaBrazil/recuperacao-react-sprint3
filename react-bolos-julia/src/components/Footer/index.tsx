import "./style.css";


//rotas
import {Link} from "react-router-dom";


//images
import imgwhats from "../../assets//img/whats 1.png";
import imgface from "../../assets/img/face 1.png";
import imginsta from "../../assets/img/instag 1.png";



function Footer() {
    return (
        <footer>
        <div className="container footer_container">
            <p>Todos os direitos reservados ®</p>
            <div>
                <Link to={"#"}><img src={imgwhats} alt=""/></Link>
                <Link to={"#"}><img src={imgface} alt=""/></Link>
                <Link to={"#"}><img src={imginsta} alt=""/></Link>
            </div>
        </div>
    </footer>
    );
}

export default Footer;