import Link from "next/link";
import headerStyles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={headerStyles.headergrid}>
      <Link href="/">
        <h1 className={headerStyles.logocontainer}>FlowerInc</h1>
      </Link>

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
        <li>
          <Link href="/flowers">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
