import React from "react";

function BusTracker() {
  // Sample bus data (you can replace with API later)
  const buses = [
    {
      name: "Bus A",
      route: "Campus → City Center",
      departure: "7:30 AM",
      locations: [
        { place: "Stop 1", reach: "7:40 AM" },
        { place: "Stop 2", reach: "7:55 AM" },
        { place: "Stop 3", reach: "8:15 AM" },
      ],
    },
    {
      name: "Bus B",
      route: "Campus → Railway Station",
      departure: "8:00 AM",
      locations: [
        { place: "Stop 1", reach: "8:10 AM" },
        { place: "Stop 2", reach: "8:25 AM" },
        { place: "Stop 3", reach: "8:45 AM" },
      ],
    },
    {
      name: "Bus C",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus D",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus E",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus F",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus G",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "BuS H",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus I",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus J",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus K",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus L",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus M",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus N",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
    {
      name: "Bus O",
      route: "Campus → Airport",
      departure: "6:45 AM",
      locations: [
        { place: "Stop 1", reach: "6:55 AM" },
        { place: "Stop 2", reach: "7:15 AM" },
        { place: "Stop 3", reach: "7:35 AM" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Bus Tracker
      </h1>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {buses.map((bus, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{bus.name}</h2>
            <p className="text-gray-500">{bus.route}</p>
            <p className="mt-2 text-gray-700 font-medium">
              Departure: {bus.departure}
            </p>

            <div className="mt-4">
              <h3 className="text-md font-semibold text-gray-700 mb-2">
                Stops & Timings:
              </h3>
              <ul className="space-y-1">
                {bus.locations.map((loc, i) => (
                  <li
                    key={i}
                    className="flex justify-between text-sm text-gray-600 border-b py-1"
                  >
                    <span>{loc.place}</span>
                    <span>{loc.reach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusTracker;
