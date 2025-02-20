const Testimonial = () => {
    return (
        <>
            <div className="testimonialCard">
                <div className="testimonialProfile">
                    <img  style={{ borderRadius:'20px'}}  width={100} src="https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg?t=st=1740039469~exp=1740043069~hmac=b898079c8e87ee822dfe540f6eebe2de4a8551d97dc7a2372a9009e231c7481d&w=1380" alt="User Profile" className="profileImage" />
                    <h3 className="userName">John Doe</h3>
                </div>
                <div className="testimonialRating">
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                    <span className="star">⭐</span>
                </div>
                <div className="testimonialDetail">
                    <p>
                        "This restaurant has the best food I have ever tasted! The ambiance is fantastic, and the service was top-notch. Highly recommended!"
                    </p>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
