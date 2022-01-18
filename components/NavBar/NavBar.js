import Header from '../Header'
import Link from 'next/link'
export default function NavBar(props){
    function highlighterDisplay(pageName){
        const hightlighter = `<span>hello</span>`

        if("home"==pageName){
            return hightlighter
        }
    }
    return (
<nav className="flex flex-row justify-around items-center">
<Header/>
<ul className="flex flex-row space-x-7 text-center text-sm leading-6">
    <li><Link href="/"><a>Home</a></Link></li>
     {() => highlighterDisplay("home")}
    <li><Link href="#about"><a>About me</a></Link></li>
    <li><Link href="#projects"><a>Projects</a></Link></li>
    <li><Link href="#contact"><a>Contact me</a></Link></li>
</ul>
</nav>
    )
}