import classes from "../../styles/sections/Categories.module.scss";

const Categories = () => {
  return (
    <section className={classes.categories}>
      <h1>
        <span>Services </span>Offered
      </h1>
      <div className={classes.container}>
        <div>
          <img src="/images/categories/c1.png" alt="" />
          <p>Abstract</p>
        </div>
        <div>
          <img src="/images/categories/c2.png" alt="" />
          <p>Abstract</p>
        </div>
        <div>
          <img src="/images/categories/c3.png" alt="" />
          <p>Abstract</p>
        </div>
      </div>
    </section>
  );
};
export default Categories;
