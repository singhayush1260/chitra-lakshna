import classes from "../../styles/pages/Blog.module.scss";
import { GrArticle } from "react-icons/gr";
import BlogCard from "@/src/components/BlogCard";
import { useEffect, useState } from "react";
import Loader from "@/src/components/util/Loader";
import sanityClient from '../../sanity/sanity';
const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
    const posts= await sanityClient.fetch(`*[_type=='post']{title,slug,mainImage{
    asset->{_id,url},alt,},publishedAt,"author":author->name,}`);
    setPosts(posts);
    setIsLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className={classes.page_wrapper}>
      <h1>Bl<span>og</span> <GrArticle /></h1>
      {isLoading ? (<Loader /> ) : (
        <div className={classes.blog_container}>
          {posts.map((post) => {
            return ( <BlogCard 
                title={post.title} 
                thumbnail={post.mainImage?post.mainImage.asset.url:"/images/utils/image_placeholder.jpg"} 
                desc={post.description}
                author={post.author?post.author:"Anonymous"}
                publishedAt={post.publishedAt?post.publishedAt:new Date().getDate()} 
                slug={post.slug?post.slug.current:"artice-not-found"}/>)
          })}
        </div>
      )}
    </div>
  );
};
export default Blog;
