import classes from '../../styles/sections/WelcomeMessage.module.scss';
const WelcomeMessage=()=>{
    return (
        <section className={classes.welcome_message}>
         <h1>Welcome To Our  <span>Website</span></h1>
         <p>
         Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin
         molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
         Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta
         Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue 
         leo eget malesuada. Cras ultricies ligula sed magna dictum porta. 
         </p>
        </section>
    )
}
export default WelcomeMessage;