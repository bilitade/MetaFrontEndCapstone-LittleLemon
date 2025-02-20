
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faTruck } from "@fortawesome/free-solid-svg-icons";
const Menu = ({ image, title, price }) => {
    return (
        <div className="menuCard">
            <img className="menuImage" src={image} alt={title} />
            <div style={ {display:"flex", justifyContent:"space-between",}} > <h3 className="menuTitle">{title}</h3>
            <h3 className="menuPrice">{price}</h3></div>
           
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eum omnis debitis quasi sint recusandae odio pariatur magni, 
                laudantium, consequuntur eos tempora quo repellendus, voluptate 
                voluptas consequatur exercitationem. Autem, natus sequi.
            </p>
            <button className="orderButton">Order Delivery     <FontAwesomeIcon color="#333333" icon={faTruck} /></button>   
        </div>
    );
};

export default Menu;
