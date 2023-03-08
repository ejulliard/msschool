import Image from "next/image";
import { useState } from "react";
import data from "../component/data.json";
import Menu from "./menu";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="">
      {data.data.map((d) =>
        d.coordonnees.map((c) => (
          <>
            <div className="menu">
              <button
                type="button"
                className="menu-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div>Menu</div>
                {isOpen ? (
                  <XIcon className="menu-icon" />
                ) : (
                  <MenuAlt2Icon className="menu-icon" />
                )}
              </button>
              <div className={`${isOpen ? "menu-display" : "menu-hidden"}`}>
                <Menu />
              </div>
            </div>

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
            <a className="button" href="/contact" title="">
              Contactez-moi
            </a>
          </>
        ))
      )}
    </header>
  );
}
