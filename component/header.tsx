import Image from "next/image";
import data from "../component/data.json";

export default function Header() {
  return (
    <header className="">
      {data.data.map((d) =>
        d.coordonnees.map((c) => (
          <>
            <Image
              className=""
              src="/photo.jpg"
              alt=""
              title=""
              width={300}
              height={400}
            />
            <h1 className="title text-3xl font-bold underline">
              {c.prenom} {c.nom}
            </h1>
            <p className="description">{c.fonction}</p>
            <a
              className="bg-black text-white uppercase"
              href="/contact"
              title=""
            >
              Contactez-moi
            </a>
          </>
        ))
      )}
    </header>
  );
}
