import classes from "../../styles/pages/Blog.module.scss";
import { GrArticle } from "react-icons/gr";
import BlogCard from "@/src/components/BlogCard";
import { useEffect, useState } from "react";
import Loader from "@/src/components/util/Loader";
const Blog = () => {

  const[isLoading,setIsLoading]=useState(true);  
  const[posts,setPosts]=useState([]);

  useEffect(()=>{
setIsLoading(true)
  const fetchPosts= async ()=>{
    const data=await fetch('https://dummyjson.com/products');
    const posts=await data.json();
    setPosts(posts.products);
    setIsLoading(false);
    console.log(posts.products);
  }
  fetchPosts();

  },[])


  return (
    <div className={classes.page_wrapper}>
      <h1>Bl<span>og</span> <GrArticle /></h1>
      {
        isLoading? <Loader/> :<div className={classes.blog_container}>
         {posts.map((post)=>{
           return <BlogCard title={post.title} thumbnail={post.thumbnail} desc={post.description}/>
         })}
       </div>
      }
    </div>
  );
};
export default Blog;
