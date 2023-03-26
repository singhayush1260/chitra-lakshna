import classes from "../../styles/sections/ExplorePaintings.module.scss";
import { motion } from "framer-motion";
const ExplorePaintings = () => {
  return (
    <section className={classes.explore_painting}>
      <h1>
        Explore our <span>paintings</span>
      </h1>
      <motion.div
        className={classes.image_container}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/images/explore_painting/p1.png" />
        <img src="/images/explore_painting/p2.png" />
        <img src="/images/explore_painting/p3.png" />
        <img src="/images/explore_painting/p1.png" />
        <img src="/images/explore_painting/p2.png" />
        <img src="/images/explore_painting/p3.png" />
      </motion.div>
    </section>
  );
};
export default ExplorePaintings;
