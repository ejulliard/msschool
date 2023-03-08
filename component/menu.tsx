import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        <Link href="">
          <li>Projets</li>
        </Link>
        <Link href="">
          <li>Expériences</li>
        </Link>
        <Link href="">
          <li>Éducation</li>
        </Link>
        <Link href="">
          <li>Intérêts</li>
        </Link>
        <Link href="">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
