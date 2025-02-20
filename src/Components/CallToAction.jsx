import Chicago from "./Chicago";
import ResaurantFood from "../assets/restauranfood.jpg";


const CallToAction = () => {
    return (
        <div className="callToActionSection" style={{ display: "flex", alignItems: "center", gap: "20px" }}>

            <Chicago />
            
            <img className="callToActionImage" style={ { justifySelf:"end"}} src={ResaurantFood} alt="Delicious restaurant food" />
        </div>
    );
};
export default CallToAction;
