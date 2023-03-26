import Banner from "@/src/sections/Banner";
import Categories from "@/src/sections/Categories";
import Contact from "@/src/sections/Contact";
import ExplorePaintings from "@/src/sections/ExplorePaintings";
import WelcomeMessage from "@/src/sections/WelcomeMessage";

const Home=()=>{
  return(
    <>
    <Banner/>
    <WelcomeMessage/>
    <ExplorePaintings/>
    <Categories/>
    <Contact/>
    </>
  )
}
export default Home;