import Link from "next/link";
import headerStyles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={headerStyles.headergrid}>
      <h1 className={headerStyles.logocontainer}>Logo name here</h1>
      <ul className={headerStyles.navlinkscontainer}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/flowers">Flowers</Link>
        </li>
      </ul>
    </div>
  );
}
