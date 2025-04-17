import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Sun, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Navbar */}
      <nav className="bg-gray-900 dark:bg-gray-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Himal Fullel
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="#home" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="hover:text-blue-400 transition"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-blue-400 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hello, I’m Himal Fullel
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              A Creative Designer and Developer from Nepal, specializing in web
              development.
            </p>
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Link href="#about">About Me</Link>
            </Button>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="h-6 w-6 text-gray-300 hover:text-blue-400" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-blue-400" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-blue-400" />
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="https://via.placeholder.com/300"
              alt="Himal Fullel"
              width={300}
              height={300}
              className="rounded-full border-4 border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            I’m a passionate and dedicated developer and designer, creating
            impressive solutions in web development. Known as Himal Fullel, I
            specialize in building modern, responsive websites and applications.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle>Project {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`https://via.placeholder.com/300x200?text=Project+${item}`}
                    alt={`Project ${item}`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <p className="mt-4">
                    A brief description of the project goes here.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Figma",
            ].map((skill) => (
              <div key={skill} className="text-center">
                <div className="bg-blue-500 text-white p-4 rounded-full inline-block mb-2">
                  <span className="text-xl font-semibold">
                    {skill.charAt(0)}
                  </span>
                </div>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-4">
            Feel free to reach out for collaborations or inquiries!
          </p>
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
            <Link href="mailto:himalfullel@example.com">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Himal Fullel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
