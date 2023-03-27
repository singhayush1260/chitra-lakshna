import classes from "../../styles/pages/Contact.module.scss";
import { useForm } from "@formspree/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

 const[state,handleSubmit]=useForm("xbjeavaq");

 if(state.succeeded){
    console.log('inside succceeded')
    document.getElementById('form').reset();
    toast.success('Message Sent', {
        toastId: 'success1',
    })
}

  return(
   <>
   <ToastContainer position="top-right" autoClose={3000}  hideProgressBar={true} newestOnTop={false}closeOnClick rtl={false} theme="light"/>
    <div className={classes.contact_page}>
        <h1>Contact<span>Us</span> </h1>
      <div className={classes.formbold_main_wrapper}>
        <div className={classes.formbold_form_wrapper}>
          <form onSubmit={handleSubmit} enctype="text/plain" id="form">
            <div className={classes.formbold_mb_5}>
              <label for="name" className={classes.formbold_form_label}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
                className={classes.formbold_form_input}
              />
            </div>

            <div className={classes.formbold_mb_5}>
              <label for="email" className={classes.formbold_form_label}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                className={classes.formbold_form_input}
              />
            </div>

            <div className={classes.formbold_mb_5}>
              <label for="subject" className={classes.formbold_form_label}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                required
                className={classes.formbold_form_input}
              />
            </div>

            <div className={classes.formbold_mb_5}>
              <label for="message" className={classes.formbold_form_label}>
                Message
              </label>
              <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Type your message"
                required
                className={classes.formbold_form_input}
              ></textarea>
            </div>
            <div>
              <button type="submit" className={classes.formbold_btn}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   </>
  );
};
export default Contact;
