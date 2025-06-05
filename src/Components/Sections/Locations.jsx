import React, { useState } from "react";
import TabHeading from "../Common/TabHeading";

export default function Locations() {
  const locations = [
    {
      name: "Talkin' Tacos",
      city: "Miami, FL",
      address: "97 SW 8th St, Miami, FL 33130",
      phone: "(305) 602-4816",
      email: "info@talkintacos.net",
      mapQuery: "97 SW 8th St, Miami, FL 33130"
    },
    {
      name: "Another Location",
      city: "Florida",
      address: "456 Ocean Dr, Florida",
      phone: "(123) 456-7890",
      email: "contact@anotherlocation.com",
      mapQuery: "456 Ocean Dr, Florida"
    }
  ];

  const [selected, setSelected] = useState(0);
  const loc = locations[selected];

  return (
    <>
      <div className="w-full h-fit">
        <TabHeading
          title={"Locations"}
          description={
            "The Location section comes before the footer usually. You can list location of your outlets here."
          }
        />
      </div>

      <section className="w-full px-4 py-8 font-inter">
        <h1 className="text-[28px] md:text-[32px] font-semibold mb-6">Our locations</h1>

        {/* Location Tabs */}
        <div className="flex gap-2 mb-6">
          {locations.map((location, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium ${
                selected === i
                  ? "bg-black text-white"
                  : "bg-[#EBEBEC] text-black"
              }`}
            >
              {location.city}
            </button>
          ))}
        </div>

        {/* Location Card */}
        <div className="bg-[#F5F5F5] rounded-2xl p-6 flex flex-col md:flex-row gap-6">
          {/* Map */}
          <iframe
            title="Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`}
            className="w-full md:w-1/2 h-[240px] md:h-[300px] rounded-xl border-0"
          ></iframe>

          {/* Details */}
          <div className="flex flex-col justify-between w-full">
            <div>
              <h2 className="text-xl font-semibold">{loc.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{loc.city}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 border-t pt-4">
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p>{loc.address}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Contacts</p>
                  <p>{loc.phone}</p>
                  <p>{loc.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-white bg-black px-4 py-2 rounded-lg"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Edit Section */}
<div className="mt-10">
  <h2 className="text-lg font-semibold mb-4">Edit</h2>

  {/* Dropdown-styled toggles */}
  <div className="flex flex-col gap-4 mb-6">
    {locations.map((location, i) => (
      <div
        key={i}
        className="flex justify-between items-center bg-[#F5F5F5] px-4 py-3 rounded-xl"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{location.city}</span>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={selected === i}
            onChange={() => setSelected(i)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-black relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
        </label>
      </div>
    ))}
  </div>

  {/* Form Fields
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
    <div>
      <label className="block text-sm font-medium mb-1">Outlet name</label>
      <input
        type="text"
        value={loc.name}
        onChange={(e) => (locations[selected].name = e.target.value)}
        className="w-full p-2 border rounded-md text-sm"
        placeholder="Outlet name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Location</label>
      <input
        type="text"
        value={loc.address}
        onChange={(e) => (locations[selected].address = e.target.value)}
        className="w-full p-2 border rounded-md text-sm"
        placeholder="Outlet address"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Contact number</label>
      <input
        type="text"
        value={loc.phone}
        onChange={(e) => (locations[selected].phone = e.target.value)}
        className="w-full p-2 border rounded-md text-sm"
        placeholder="Phone number"
      />
    </div>
  </div> */}

  {/* Save Button */}
  <div className="mt-6">
    <button className="bg-black text-white px-6 py-2 rounded-lg text-sm">
      Save
    </button>
  </div>

  {/* Add More Button */}
  <div className="mt-6">
    <button className="border border-black text-black px-6 py-2 rounded-lg text-sm font-medium">
      Add more +
    </button>
  </div>
</div>

      </section>
    </>
  );
}
