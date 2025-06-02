import React, { useState } from "react";

export default function Locations() {
  const [locations, setLocations] = useState([
    {
      name: "Head Office",
      city: "New York",
      address: "123 Main St, New York, NY",
      phone: "(555) 123-4567",
      email: "info@company.com",
      mapQuery: "123 Main St, New York, NY",
      lat: "",
      lng: ""
    }
  ]);
  const [selected, setSelected] = useState(0);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(locations[0]);

  const handleSelect = (i) => {
    setSelected(i);
    setForm(locations[i]);
    setEdit(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updated = [...locations];
    updated[selected] = form;
    setLocations(updated);
    setEdit(false);
  };

  const handleAdd = () => {
    setLocations([
      ...locations,
      { name: "", city: "", address: "", phone: "", email: "", mapQuery: "", lat: "", lng: "" }
    ]);
    setSelected(locations.length);
    setForm({ name: "", city: "", address: "", phone: "", email: "", mapQuery: "", lat: "", lng: "" });
    setEdit(true);
  };

  const loc = locations[selected];
  if (!loc) return null;

  return (
    <>

       <div className="w-full h-fit">
        <h1 className="poppins_med text-[#201F33] text-[18px]">
       Location
        </h1>
      
      </div>
    <section className="w-full px-4 md:px-[110px] py-[60px] font-inter">
   
      <h1 className="capitalize text-[32px] md:text-[40px] leading-[1.2] tracking-tight font-medium pb-8">
       Locations
      </h1>
      <div className="mb-4 flex gap-2 flex-wrap">
        {locations.map((location, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${selected === i ? "bg-white text-black border border-[#EBEBEC]" : "bg-[#EBEBEC] text-black"}`}
          >
            {location.name || `Location ${i + 1}`}
          </button>
        ))}
        <button
          onClick={handleAdd}
          className="rounded-full px-5 py-2 text-sm font-medium bg-[#4B21E2] text-white border border-[#4B21E2]"
        >
          + Add Location
        </button>
      </div>
      {edit ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F7F7FA] p-6 rounded-xl" onSubmit={e => { e.preventDefault(); handleSave(); }}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input name="city" value={form.city} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input name="address" value={form.address} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Map Query</label>
            <input name="mapQuery" value={form.mapQuery} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Latitude</label>
            <input name="lat" value={form.lat} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="e.g. 40.7128" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Longitude</label>
            <input name="lng" value={form.lng} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="e.g. -74.0060" />
          </div>
          <div className="col-span-2 flex gap-3 mt-4">
            <button type="submit" className="bg-[#4B21E2] text-white px-6 py-2 rounded">Save</button>
            <button type="button" className="bg-gray-200 px-6 py-2 rounded" onClick={() => setEdit(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <div className="bg-[#EBEBEC] p-6 rounded-2xl flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{loc.name}</h3>
              <p className="text-lg text-gray-700">{loc.city}</p>
            </div>
            <button className="text-[#4B21E2] underline" onClick={() => setEdit(true)}>Edit</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-4 text-sm text-gray-800">
            <div>
              <p className="font-medium mb-1">Address</p>
              <p>{loc.address}</p>
            </div>
            <div>
              <p className="font-medium mb-1">Contacts</p>
              <p>{loc.phone}</p>
              <p>{loc.email}</p>
            </div>
          </div>
          <iframe
            title="Map"
            src={
              loc.lat && loc.lng
                ? `https://www.google.com/maps?q=${loc.lat},${loc.lng}&output=embed`
                : `https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`
            }
            className="w-full h-[220px] md:h-[300px] rounded-[14px] border-0 mt-4"
          />
        </div>
      )}
    </section>
    </>
    
  );
}
