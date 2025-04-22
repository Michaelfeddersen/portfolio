import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Hero from "@/components/heroBG";



export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);



  return (
   
    <div className="relative z-10 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">

     <Hero />
     <header className="p-6 flex justify-between items-center max-w-5xl mx-auto">
      
        <h1 className="text-2xl font-bold">Mein Portfolio</h1>
        {/* <Button variant="ghost" className="p-0"> */}
        <label className="switch cursor-pointer">
          <input
            id="checkbox"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider">
            <div className="star star_1"></div>
            <div className="star star_2"></div>
            <div className="star star_3"></div>
            <svg viewBox="0 0 16 16" className="cloud_1 cloud">
              <path
                transform="matrix(.77976 0 0 .78395-299.99-418.63)"
                fill="#fff"
                d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925"
              />
            </svg>
          </span>
        </label>
        {/* </Button> */}
      </header>

      <main className="max-w-5xl mx-auto px-4 grid gap-10">
      <div className="flex items-center justify-center gap-6">
  {/* Bild-Sektion */}
  <div className="flex items-center justify-start gap-6 w-full">
  {/* Bild ganz links */}
  <section className="flex-shrink-0 self-start padding-left-4 shadow-lg">
    <img
      src="/images/me.png"
      alt="me"
      className="rounded-full object-cover"
      style={{ height: "calc(100% + 4px)", width: "auto", maxHeight: "150px" }}
    />
  </section>

  {/* Text mittig innerhalb des verfügbaren Platzes */}
  <section className="flex-1 text-center">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-semibold mb-2"
    >
      Willkommen auf meinem Portfolio
    </motion.h2>
    <p className="text-lg text-gray-600 dark:text-gray-300">
      Hier findest du eine Auswahl meiner Projekte und Informationen über mich.
    </p>
  </section>
</div>
</div>
        <section>
          <h3 className="text-2xl font-bold mb-4">Projekte</h3>
          <div className=" cards grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >

                <div id="card">
                  <Card className="projektcard rounded-2xl shadow-md hover:shadow-xl transition" >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-t-2xl w-full h-40 object-cover"
                    />
                    <CardContent className="p-4" >
                      <h4 className="font-semibold text-xl mb-1">{project.title}</h4>
                      <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="flex gap-3">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            className="flex overflow-hidden items-center text-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2 max-w-52 whitespace-pre group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-700 hover:ring-offset-2"
                          >
                            <span
                              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                            ></span>
                            <div className="flex items-center">

                              <span className="ml-1 text-white">Demo</span>
                            </div>
                          </button>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            href="#"
                            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                          >
                            <span
                              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                            ></span>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
                                <path
                                  d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                                ></path>
                              </svg>
                              <span className="ml-1 text-white">GitHub</span>
                            </div>

                          </button>
                        </a>


                      </div>
                    </CardContent>
                  </Card>
                </div>


              </motion.div>
            ))}
          </div>
        </section >

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
      </main >

      <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Dein Name
      </footer>
    </div >
  );
}
