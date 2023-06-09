import classes from "../../styles/sections/Banner.module.scss";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section className={classes.banner}>
      <img src="/images/home/banner_image.jpeg" alt="banner image" />
      <motion.div
        className={classes.cta}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Chitra Lakshana</h1>
        <p>Illustration And Designs</p>
        <button>Visit Store</button>
      </motion.div>
    </section>
  );
};
export default Banner;


