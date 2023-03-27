import classes from "../../styles/pages/Gallery.module.scss";
import { GrGallery } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sanityClient from '../../sanity/sanity';
const Gallery = ({data}) => {
  const [images, setImages] = useState(data);
  const [filtered, setFiltered] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");
  const [modal, setModal] = useState(false);
  const [imgSrc, setImageSrc] = useState("");
  const openImage = (src) => {
    setImageSrc(src);
    setModal(!modal);
  };
  const closeImage = () => {
    setModal(false);
  };

  useEffect(() => {
   setImages(data);
   setFiltered(data);
  }, []);

  useEffect(() => {
    if (activeCategory === "all"){
      setFiltered(images);
      return;
    }
    const filteredData = images.filter((image) => {return image.type === activeCategory;});
    setFiltered(filteredData);
  }, [activeCategory]);

  return (
    <>
      <div className={classes.page_wrapper}>
        {modal ? (
          <div className={classes.modal}>
            <img src={imgSrc} alt="image" />
            <RxCross1 onClick={closeImage} />
          </div>
        ) : (
          ""
        )}
        <h1>
          Gall<span>ery</span> <GrGallery />{" "}
        </h1>
        <div className={classes.filter_btn}>
          <select
            onChange={(e) => {
              setActiveCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="abstract">Abstract</option>
            <option value="caricature">Caricature</option>
            <option value="portraits">Portraits</option>
          </select>
        </div>
        <motion.div layout className={classes.image_grid}>
          <AnimatePresence>
            {filtered.map((image) => {
              {console.log('inside filter',image.image.asset.url)}
              return (
                <motion.img
                  layout
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  src={image.image.asset.url}
                  key={image.id}
                  onClick={() => {openImage(image.image.asset.url)}}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};


export async function getStaticProps() {
  const images = await sanityClient.fetch(`*[_type=='gallery']{title,type, image{asset->{_id,url}}}`);
  console.log(images[0]);
  return {
    props: {
      data: images,
    },
    revalidate:3600
  };
}

export default Gallery;

/*

<img src="/images/explore_painting/p1.png"/>
        <img src="/images/explore_painting/p2.png" />
        <img src="/images/explore_painting/p3.png" />
        <img src="/images/explore_painting/p1.png" />
        <img src="/images/explore_painting/p2.png" />
        <img src="/images/explore_painting/p3.png" />
        <img src="/images/explore_painting/p2.png" />
        <img src="/images/explore_painting/p3.png" />
        <img src="/images/explore_painting/p2.png" />
        <img src="/images/explore_painting/p3.png" />
        <img src="/images/explore_painting/p2.png" />
        <img src="/images/explore_painting/p3.png" />

*/
/*

 <button onClick={()=>{setActiveCategory('all')}}>All</button>
          <button onClick={()=>{setActiveCategory('abstract')}}>Abstract</button>
          <button onClick={()=>{setActiveCategory('caricature')}}>Caricature</button>
          <button onClick={()=>{setActiveCategory('portraits')}}>Portraits</button>

*/
/*

 setImages(
      new Array(
        { id: 1, src: "/images/explore_painting/p1.png", type: "abstract" },
        { id: 2, src: "/images/explore_painting/p2.png", type: "caricature" },
        { id: 3, src: "/images/explore_painting/p3.png", type: "portraits" },
        { id: 4, src: "/images/explore_painting/p1.png", type: "abstract" },
        { id: 5, src: "/images/explore_painting/p1.png", type: "portraits" },
        { id: 6, src: "/images/explore_painting/p1.png", type: "abstract" },
        { id: 7, src: "/images/explore_painting/p1.png", type: "caricature" },
        { id: 8, src: "/images/explore_painting/p1.png", type: "portraits" }
      )
    );
    setFiltered(
      new Array(
        { id: 1, src: "/images/explore_painting/p1.png", type: "abstract" },
        { id: 2, src: "/images/explore_painting/p2.png", type: "caricature" },
        { id: 3, src: "/images/explore_painting/p3.png", type: "portraits" },
        { id: 4, src: "/images/explore_painting/p1.png", type: "abstract" },
        { id: 5, src: "/images/explore_painting/p1.png", type: "portraits" },
        { id: 6, src: "/images/explore_painting/p1.png", type: "abstract" },
        { id: 7, src: "/images/explore_painting/p1.png", type: "caricature" },
        { id: 8, src: "/images/explore_painting/p1.png", type: "portraits" }
      )
    );


*/