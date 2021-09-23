import Image from 'next/image'




const Hero = (props) =>{
    const {profilePic, styles} = props
    return(
        <div id='hero'>
            <h2 className={styles.greeting}>Hello World! I am <span>Xavier Loera Flores</span>, <br/>Aspiring Web Developer</h2>
            <a href="XavierLoeraFlores-Resume.pdf" download>Download Resume</a>
            <Image className ={styles.profilePic} id='profile-pic' src={profilePic} alt="Picture of Xavier Loera Flores"/>
        </div>


    )
}

export default Hero;


