import classes from '../../styles/components/BlogCard.module.scss';
const BlogCard=({title, thumbnail,desc})=>{

    return(
        <div className={classes.card}>
          <div className={classes.thumbnail}>
           <img src={thumbnail?thumbnail:"/images/utils/image_placeholder.jpg"}/>
          </div>
          <div className={classes.post_info}>
            <h1>{title}</h1>
            <div>
            <p>{desc}</p>
            </div>
            <small className={classes.author}>Ayush Singh</small>
            <small className={classes.date}>12th March, 2023</small>
          </div>
        </div>
    )
}
export default BlogCard;