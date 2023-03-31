import classes from "../../styles/sections/Categories.module.scss";

const Categories = () => {
  return (
    <section className={classes.categories}>
      <h1>
        <span>Services </span>Offered
      </h1>
      <div className={classes.container}>
        <div>
          <img src="/images/categories/design.jpg" alt="" />
          <p>Design</p>
        </div>
        <div>
          <img src="/images/categories/mithila.jpg" alt="" />
          <p>Mithila Folk Art</p>
        </div>
        <div>
          <img src="/images/categories/c3.png" alt="" />
          <p>Painting</p>
        </div>
      </div>
    </section>
  );
};
export default Categories;
