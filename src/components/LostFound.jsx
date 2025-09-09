import React, { useState, useEffect, useRef } from "react";

function LostFound() {
  const [itemImage, setItemImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [items, setItems] = useState([]);

  const fileInputRef = useRef(null); // ✅ to reset file input

  // Fetch existing items
  useEffect(() => {
    fetch("http://localhost:5000/api/lostfound")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setItemImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", itemImage);
    formData.append("location", location);
    formData.append("contact", contact);

    const res = await fetch("http://localhost:5000/api/lostfound", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const newItem = await res.json();
      setItems([newItem, ...items]); // ✅ Add new item instantly to list

      // ✅ Reset form fields
      setItemImage(null);
      setPreview(null);
      setLocation("");
      setContact("");
      if (fileInputRef.current) fileInputRef.current.value = ""; // clear file input
    } else {
      alert("Failed to upload item");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Lost & Found
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left: Item List */}
        <div className="bg-white p-4 rounded-2xl shadow-md overflow-y-auto h-[600px]">
          <h2 className="text-xl font-semibold mb-4">Posted Items</h2>
          {items.length === 0 ? (
            <p className="text-gray-500">No items posted yet.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item._id}
                  className="flex items-center space-x-4 border-b pb-3"
                >
                  <img
                    src={`http://localhost:5000/uploads/${item.image}`}
                    alt="Lost item"
                    className="w-16 h-16 object-cover rounded-lg shadow"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      Location: {item.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      Contact: {item.contact}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right: Add New Item */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Add Item</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef} // ✅ keep reference to clear input later
              onChange={handleImageChange}
              className="mt-2 w-full"
              required
            />
          </div>

          {preview && (
            <div className="mb-4 flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-xl shadow-md"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-2 w-full p-2 border rounded-lg"
              placeholder="Where was it found/lost?"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Contact</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-2 w-full p-2 border rounded-lg"
              placeholder="Phone/Email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LostFound;


