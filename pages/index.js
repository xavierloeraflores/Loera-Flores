import Hero from "../components/home/hero";
import xavier from '../public/xavier.jpg';
import styles from '../styles/Home.module.css'
const HomePage = () =>{
  
  return(
    <main id='main'>
      <Hero profilePic={xavier} styles= {styles} />
    </main>
  )
}

export default HomePage;