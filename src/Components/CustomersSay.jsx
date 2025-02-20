import Testimonial from "./testmonial";  // Adjust the import path as needed

const CustomerSay = () => {
    return (
        <>
            <section className="customerSaySection">
                <h2>What Our Customers Say</h2>
                <div className="testimonialList">
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </div>
            </section>
        </>
    );
};

export default CustomerSay;