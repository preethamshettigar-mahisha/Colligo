import React from "react";

function CanteenMenu() {
  // Example menu data (can be expanded or fetched from backend later)
  const menus = [
    {
      id: 1,
      name: "Main Canteen",
      image: "https://imgs.search.brave.com/9q0lQTHLNY76Pbs890mk21fwDJYe1w0JNGRoUSYho2o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZjL2U4/L2U2LzZjZThlNjg3/NzQ5YmEzODlmNGJk/ZDUwZTMyNjdmMzcz/LmpwZw",
    },
    {
      id: 2,
      name: "Food Court",
      image:"https://imgs.search.brave.com/9q0lQTHLNY76Pbs890mk21fwDJYe1w0JNGRoUSYho2o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZjL2U4/L2U2LzZjZThlNjg3/NzQ5YmEzODlmNGJk/ZDUwZTMyNjdmMzcz/LmpwZw",
    },
    {
      id: 3,
      name: "Cafe Delight",
      image: "https://imgs.search.brave.com/9q0lQTHLNY76Pbs890mk21fwDJYe1w0JNGRoUSYho2o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZjL2U4/L2U2LzZjZThlNjg3/NzQ5YmEzODlmNGJk/ZDUwZTMyNjdmMzcz/LmpwZw",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍽️ Canteen Menus
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Restaurant name */}
            <div className="p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-700">
                {menu.name}
              </h2>
            </div>

            {/* Menu image */}
            <div className="p-4 flex justify-center">
              <img
                src={menu.image}
                alt={`${menu.name} Menu`}
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CanteenMenu;
