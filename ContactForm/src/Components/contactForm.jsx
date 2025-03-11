const ContactForm=()=>{

    return (
        <>
        <div className="container">
        <div className="Form">

            <form >
               <div className="formElements">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                </div>
                
                <div className="formElements">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                </div>

                <div className="formElements">
                <label htmlFor="text">Text</label>
                <textarea type="text" name="text" />
                
                <div className="submit">
                <button className="btnSubmit">Submit</button>
                </div>
                </div>
                
            </form>
        </div>
          <div className="img">
            <img src="contact.jpg" alt="contact us" />
          </div>
        </div>
        </>
    )
}
export default ContactForm