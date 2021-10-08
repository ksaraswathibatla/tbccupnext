import Link from "next/link";
const Navbar = ({ tbcCupMenu, menuItems }) => {
    const { file } = tbcCupMenu.tbccuplogo.fields;
    const { width, height } = file.details.image;
    const logoUrl = 'https:' + file.url;
    return (
        <div className="navContainer">
            <div id="logo">
                <a href="/"><Link href="/"><div style={{ backgroundImage: `url(${logoUrl})`, width: width / 2, height: height / 2 }} ></div></Link></a>
            </div>
            <nav className="regularNav">
                {menuItems.map(p => (<Link href="/">{p}</Link>))}
            </nav>
        </div>
    );
};

export default Navbar
