import Head from "next/head";
import data from "../component/data.json";
import Header from "../component/header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href=""></link>
      </Head>
      {data.data.map((d) => (
        <>
          <Header />
          <main className="main">
            <h1>
              Étudiant en cinquième année d'école de communication spécialisé en
              marketing digital
            </h1>
            <p>
              Bonjour, je suis [Nom de l'élève], étudiant en cinquième année
              d'école de communication spécialisé en marketing digital.
              Passionné par le monde du marketing depuis mon plus jeune âge,
              j'ai choisi de poursuivre des études en marketing digital pour
              développer mes compétences et ma compréhension de cette industrie
              en constante évolution.
            </p>
            <h2>Mon parcours</h2>
            <p>
              Après avoir obtenu mon diplôme de lycée, j'ai décidé de poursuivre
              mes études en marketing digital pour me préparer pour une carrière
              dans cette industrie passionnante. Depuis ma première année, j'ai
              acquis une solide compréhension des différents aspects du
              marketing digital, y compris la publicité en ligne, le
              référencement, l'analyse de données et les médias sociaux.
            </p>
            <h2>Mes compétences</h2>
            <p>
              Au cours de mes études, j'ai développé un certain nombre de
              compétences clés qui sont essentielles pour réussir dans
              l'industrie du marketing digital. Je suis capable de créer des
              campagnes publicitaires efficaces, de concevoir des stratégies de
              marketing en ligne, d'analyser des données pour optimiser les
              performances et de gérer les médias sociaux pour accroître la
              visibilité de la marque.
            </p>
            <h2>Mon objectif</h2>
            <p>
              Mon objectif est de poursuivre une carrière réussie dans
              l'industrie du marketing digital après l'obtention de mon diplôme.
              Je suis impatient d'utiliser mes compétences et mes connaissances
              pour aider les entreprises à atteindre leurs objectifs de
              marketing en ligne.
            </p>
            <p>
              Merci de prendre le temps de lire ma présentation. Si vous
              souhaitez en savoir plus sur moi ou si vous avez des questions,
              n'hésitez pas à me contacter.
            </p>

            <div className="grid">
              <a href="/projets" className="card">
                <h2>Projets &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="/experiences" className="card">
                <h2>Expériences &rarr;</h2>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </a>

              <a href="/education" className="card">
                <h2>Éducation &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
              >
                <h2>Intérêts &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
          </main>

          <footer className="footer">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              {d.coordonnees.map((c) => (
                <span>
                  {c.nom} {c.prenom}
                </span>
              ))}
            </a>
          </footer>
        </>
      ))}
    </div>
  );
}
