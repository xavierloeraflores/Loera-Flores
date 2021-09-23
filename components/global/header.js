import 'next/link'
import Link from 'next/link';

const Nav = () => {


    return(
    <header>
        <div id="branding">
        <Link href='/'><a id="name" >&lt; Xavier Loera Flores &gt;</a></Link>
            {/* <img id="logo" alt="Logo for Xavier Loera Flores"/> */}
        </div>
        <nav>
            <a href="#intro">Intro</a>
            <a href="#about">About</a>
            <Link href='/portfolio'><a href="/portfolio">Portfolio</a></Link>
            <a href="#socials">Socials</a>
        </nav>
    </header>
    )
}

export default Nav;
