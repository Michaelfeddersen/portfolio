import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const projects = [
    {
      title: "Pokedex",
      description: "Eine Angular-App mit API-Zugriff auf Pokémon-Daten.",
      image: "/images/pokedex.png",
      github: "#",
      demo: "#",
    },
    {
      title: "Quiz",
      description: "Ein Quizspiel mit Sound, HTML, CSS und JavaScript.",
      image: "/images/quiz.png",
      github: "#",
      demo: "#",
    },
    {
      title: "To-Do Liste",
      description: "Klassische Aufgabenliste mit interaktiver Benutzeroberfläche.",
      image: "/images/todo.png",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="p-6 flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">Mein Portfolio</h1>
        <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </header>
      <h1 className="text-red-500 text-4xl">TEST</h1>
      <main className="max-w-5xl mx-auto px-4 grid gap-10">
        <section className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-2"
          >
            Willkommen auf meinem Portfolio
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ich bin Webentwickler mit Fokus auf Angular, HTML, CSS und JavaScript.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4">Projekte</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-2xl w-full h-40 object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-xl mb-1">{project.title}</h4>
                    <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Demo
                      </a>
                      <a
                        href={project.github}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-2">Über mich</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Ich bin ein leidenschaftlicher Quereinsteiger in die Webentwicklung. Ich habe mir selbständig moderne Webtechnologien beigebracht und arbeite besonders gerne mit Angular. Ich liebe es, kreative und funktionale Webanwendungen zu bauen.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-2">Lebenslauf</h3>
          <a
            href="/lebenslauf.pdf"
            target="_blank"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Lebenslauf ansehen
          </a>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-2">Kontakt</h3>
          <p>Du kannst mich gerne per E-Mail kontaktieren: <a className="underline" href="mailto:dein@email.de">dein@email.de</a></p>
        </section>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Dein Name
      </footer>
    </div>
  );
}
