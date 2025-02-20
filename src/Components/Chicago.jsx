import { useNavigate } from "react-router-dom";

const Chicago = () => {
    const navigate=useNavigate()
    return (
        <section className="chicago">
            <h1>Little Lemon</h1>
            <article>
                <p>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Ducimus, non consequatur,
                    ipsum iure eius in quo eos reiciendis ad voluptas
                    dicta? Officia ex, blanditiis, unde vel non voluptate 
                    praesentium sequi.
                </p>
            </article>
            <button className="primarybutton" onClick={() => navigate("/Booking")}>Reserve Table</button>
        </section>
    );
};

export default Chicago;