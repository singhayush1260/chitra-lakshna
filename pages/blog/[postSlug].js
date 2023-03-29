
import classes from '../../styles/pages/BlogPost.module.scss';
import sanityClient from '../../sanity/sanity';
import dateFormat from 'dateformat';
const BlogPost=({post})=>{
    if(!post){
       return(
        <div className={classes.page_wrapper}></div>
       )
    }
    return(
        <div className={classes.page_wrapper}>
            <div className={classes.container}>
               <div className={classes.post_metaData}>
               <h1>{post.title?post.title:"Some Post Title"}</h1>
               <p>{post.author?post.author:"Anonymous"}</p>
               <p>{post.publishedAt?dateFormat(post.publishedAt, "mmmm dS, yyyy"):"Published Date"}</p>
               <p className={classes.social_share}> 
               </p>
               </div>
                <div className={classes.post_body}>
                <img src={post.mainImage?post.mainImage.asset.url:'/images/utils/image_placeholder.jpg'} alt="thumbnail" />
                <p>
                {post.body[0].children[0].text}
                </p>
                </div>               
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const slugs = await sanityClient.fetch(`*[_type=='post']{
          slug}`);
    const paths = slugs.map((slug) => {
      return {
        params: {
          postSlug: `${slug.slug?slug.slug.current:""}`,
        },
      };
    });
    return {
      fallback: true,
      paths: paths,
    };
  }
  
  export async function getStaticProps(context) {
    const slug = context.params.postSlug;
    let post = await sanityClient.fetch(`*[slug.current=="${slug}"]{title,_id,slug,
    mainImage{asset->{ _id, url}},body,"author":author->name,categories,publishedAt }`);
    const notFound = post[0] ? false : true;
    
  
   return { props: { post: post[0] },notFound};
  }


export default BlogPost;
