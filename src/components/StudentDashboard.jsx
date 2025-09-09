import React from "react";
import { BookOpen, Bus, Utensils, Search } from "lucide-react";

function StudentDashboard() {
  const features = [
    {
      title: "Study Materials",
      description: "Access notes, e-books, and past papers for all your subjects.",
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      link: "/materials",
    },
    {
      title: "Bus Tracker",
      description: "Track live location of college buses and timings.",
      icon: <Bus className="w-10 h-10 text-green-600" />,
      link: "/bus",
    },
    {
      title: "Lost & Found",
      description: "Post missing items or claim found ones easily.",
      icon: <Search className="w-10 h-10 text-yellow-600" />,
      link: "/lostfound",
    },
    {
      title: "Canteen Menu",
      description: "Check today’s canteen menu and prices.",
      icon: <Utensils className="w-10 h-10 text-red-600" />,
      link: "/canteen",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
        <p className="text-gray-500">Quick access to all your college essentials</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 bg-white"
          >
            <div className="flex flex-col items-center p-6 text-center">
              {feature.icon}
              <h2 className="mt-4 text-xl font-semibold">{feature.title}</h2>
              <p className="text-gray-500 mt-2">{feature.description}</p>
              <a
                href={feature.link}
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Open
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;