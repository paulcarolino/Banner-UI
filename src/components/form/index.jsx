import "./form.css"
function Form() {
    return (
        <div className="form-container">

            <div className="right-banner">
                <h1 className="form-title">Schedule a Demo</h1>
                <a href="#" className="form-link">Learn More About FloQast </a>
                <div className="arrow-left"></div>
            </div>

            <div className="left-banner">
                <p className="form-subtitle">Learn How FloQast Can <strong>Improve Your Month End</strong></p>
                <form action="" className="form-banner">
                    <input type="text" className="input-form-banner" placeholder="First Name*"/>
                    <input type="text" className="input-form-banner" placeholder="Last Name*"/>
                    <button className="button-banner">Schedule Now</button>
                </form>
            </div>
        </div>
    )
}

export default Form;