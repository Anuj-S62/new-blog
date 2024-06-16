import Link from "next/link"



const Header = () =>{
    return(
        <header>
      <div >
        <Link href="/">
          <div className="text-1  xl py-3 px-8 text-sky-400">Hi! Welcome To My Blogs 👋</div>
        </Link>
      </div>
     </header>
    )
}

export default Header;