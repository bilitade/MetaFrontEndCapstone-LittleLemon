import Menu from "./Menu";
import menuImage from "../assets/greek salad.jpg"

const Specials = () => {
    return (
        <section className="specialSection">
            <div className="specialHeader">
                <h1>This Week's Specials</h1>
                <button className="primarybutton">View Online Menu</button>
            </div>

            <div className="specialList">
                <Menu image={menuImage} title="Delicious Pasta" price="$12.99" />
                <Menu image={menuImage} title="Juicy Burger" price="$10.99" />
                <Menu image={menuImage} title="Fresh Salad" price="$8.99" />
                
            </div>
        </section>
    );
};

export default Specials;
