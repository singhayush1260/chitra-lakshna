import { useRouter } from 'next/router';
import dateFormat from 'dateformat';
import classes from '../../styles/components/BlogCard.module.scss';
const BlogCard=({title, thumbnail,desc,author,publishedAt,slug})=>{
const router=useRouter();
    return(
        <div className={classes.card} onClick={()=>{router.push(`/blog/${slug}`)}}>
          <div className={classes.thumbnail}>
           <img src={thumbnail}/>
          </div>
          <div className={classes.post_info}>
            <h1>{title}</h1>
            <div>
            <p>{desc}</p>
            </div>
            <small className={classes.author}>{author}</small>
            <small className={classes.date}>{dateFormat(publishedAt, "mmmm dS, yyyy")}</small>
          </div>
        </div>
    )
}
export default BlogCard;

