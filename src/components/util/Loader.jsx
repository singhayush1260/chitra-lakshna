import classes from "../../../styles/components/utils/Loader.module.scss";
const Loader = () => {
  return (
   <>
    <div class={classes.loader}>
      <div class={`${classes.justify_content_center} ${classes.jimu_primary_loading}`}></div>
    </div>
   </>
  );
};
export default Loader;

