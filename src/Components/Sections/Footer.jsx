import React, { useState } from "react";
import BigBtn from "./Components/Common/BigBtn";

const defaultFooterConfig = {
  links: {
    column1: [
      { label: "Home", href: "/", enabled: true },
      { label: "Catering", href: "/catering", enabled: true },
      { label: "Gift Cards", href: "/gift-cards", enabled: true },
    ],
    column2: [
      { label: "Menu", href: "/menu", enabled: true },
      { label: "Careers", href: "/careers", enabled: true },
      { label: "Press", href: "/press", enabled: true },
    ],
    column3: [
      { label: "Sweepstakes", href: "/sweepstakes", enabled: true },
      { label: "Meet Our Team", href: "/team", enabled: true },
    ],
  },
  legalLinks: [
    { label: "Order Terms", href: "/order-terms" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Accessibility Statement", href: "/accessibility" },
  ],
  socialLinks: [
    { icon: "/Images/facebook-icon.svg", href: "https://facebook.com", alt: "Facebook" },
    { icon: "/Images/instagram-icon.svg", href: "https://instagram.com", alt: "Instagram" },
  ],
  footerNote: "All Rights Reserved",
  madeWith: "Made with Muncho",
  cta: { label: "Order Now", href: "/" },
};

function Footer({ config, onConfigChange }) {
  const [footerConfig, setFooterConfig] = useState(config || defaultFooterConfig);
  const [showEditor, setShowEditor] = useState(false);
  const [editConfig, setEditConfig] = useState(footerConfig);
  const { links, legalLinks, socialLinks, footerNote, madeWith, cta } = footerConfig;

  // Handle input changes for all fields
  const handleInputChange = (e, path) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setEditConfig(prev => {
      const updated = { ...prev };
      let ref = updated;
      for (let i = 0; i < path.length - 1; i++) ref = ref[path[i]];
      ref[path[path.length - 1]] = value;
      return { ...updated };
    });
  };

  // Handle array item changes (links, legalLinks, socialLinks)
  const handleArrayChange = (type, colIdx, itemIdx, field, value) => {
    setEditConfig(prev => {
      const updated = { ...prev };
      if (type === "links") {
        const colKey = Object.keys(updated.links)[colIdx];
        updated.links[colKey][itemIdx][field] = value;
      } else {
        updated[type][itemIdx][field] = value;
      }
      return { ...updated };
    });
  };

  // Add/remove items
  const handleAddItem = (type, colIdx) => {
    setEditConfig(prev => {
      const updated = { ...prev };
      if (type === "links") {
        const colKey = Object.keys(updated.links)[colIdx];
        updated.links[colKey].push({ label: "New", href: "#", enabled: true });
      } else if (type === "legalLinks") {
        updated.legalLinks.push({ label: "New", href: "#" });
      } else if (type === "socialLinks") {
        updated.socialLinks.push({ icon: "", href: "", alt: "" });
      }
      return { ...updated };
    });
  };
  const handleRemoveItem = (type, colIdx, itemIdx) => {
    setEditConfig(prev => {
      const updated = { ...prev };
      if (type === "links") {
        const colKey = Object.keys(updated.links)[colIdx];
        updated.links[colKey].splice(itemIdx, 1);
      } else {
        updated[type].splice(itemIdx, 1);
      }
      return { ...updated };
    });
  };

  // Save changes
  const handleSave = () => {
    setFooterConfig(editConfig);
    setShowEditor(false);
    if (onConfigChange) onConfigChange(editConfig);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditConfig(footerConfig);
    setShowEditor(false);
  };

  return (

    <>

       <div className="w-full h-fit">
        <h1 className="poppins_med text-[#201F33] text-[18px]">
     Footer
        </h1>
        <p className="w-full max-w-[78%] poppins_reg text-[#5C5C7A] text-[14px] mt-3">
         The Footer comes at the very last of the website, this section have links to every section on the website you can enable and disable the links.
        </p>
      </div>

     <footer className="bg-[#EBEBEC] font-inter text-sm font-medium leading-[22px] tracking-[-0.2px] px-4 md:px-20 py-10 md:py-16 text-black relative">
      {/* Edit Button */}
      <button
        className="absolute top-2 right-2 text-xs text-blue-500 underline z-10"
        onClick={() => setShowEditor(true)}
      >
        Edit Footer
      </button>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo */}
        <div className="shrink-0">
          <img
            src="/Images/Logo.png"
            alt="Website Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        {/* Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-x-12">
          {Object.values(links).map((column, i) => (
            <div key={i} className="space-y-2 flex flex-col">
              {column
                .filter(link => link.enabled)
                .map((link, idx) => (
                  <a key={idx} href={link.href}>{link.label}</a>
                ))}
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="shrink-0">
          <BigBtn title={cta.label} link={cta.href} />
        </div>
      </div>
      {/* Divider */}
      <hr className="my-8 border-t border-gray-300" />
      {/* Legal Links */}
      <div className="flex flex-wrap justify-start gap-6 text-gray-600 text-xs md:text-sm mb-4">
        {legalLinks.map((link, i) => (
          <a key={i} href={link.href}>{link.label}</a>
        ))}
      </div>
      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center text-xs text-gray-500 gap-4">
        <p>{footerNote}</p>
        <p>{madeWith}</p>
      </div>
      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        {socialLinks.map((social, i) => (
          <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt={social.alt} className="w-5 h-5" />
          </a>
        ))}
      </div>
      {/* Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Footer</h2>
            {/* Navigation Links */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Navigation Links</h3>
              {Object.entries(editConfig.links).map(([col, arr], colIdx) => (
                <div key={col} className="mb-2">
                  <div className="font-medium">{col}</div>
                  {arr.map((link, idx) => (
                    <div key={idx} className="flex gap-2 mb-1 items-center">
                      <input
                        className="border px-1 py-0.5 text-xs"
                        value={link.label}
                        onChange={e => handleArrayChange("links", colIdx, idx, "label", e.target.value)}
                        placeholder="Label"
                      />
                      <input
                        className="border px-1 py-0.5 text-xs"
                        value={link.href}
                        onChange={e => handleArrayChange("links", colIdx, idx, "href", e.target.value)}
                        placeholder="Href"
                      />
                      <label className="text-xs flex items-center gap-1">
                        <input
                          type="checkbox"
                          checked={link.enabled}
                          onChange={e => handleArrayChange("links", colIdx, idx, "enabled", e.target.checked)}
                        />
                        Enabled
                      </label>
                      <button className="text-red-500 text-xs" onClick={() => handleRemoveItem("links", colIdx, idx)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button className="text-blue-500 text-xs mt-1" onClick={() => handleAddItem("links", colIdx)}>
                    + Add Link
                  </button>
                </div>
              ))}
            </div>
            {/* Legal Links */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Legal Links</h3>
              {editConfig.legalLinks.map((link, idx) => (
                <div key={idx} className="flex gap-2 mb-1 items-center">
                  <input
                    className="border px-1 py-0.5 text-xs"
                    value={link.label}
                    onChange={e => handleArrayChange("legalLinks", null, idx, "label", e.target.value)}
                    placeholder="Label"
                  />
                  <input
                    className="border px-1 py-0.5 text-xs"
                    value={link.href}
                    onChange={e => handleArrayChange("legalLinks", null, idx, "href", e.target.value)}
                    placeholder="Href"
                  />
                  <button className="text-red-500 text-xs" onClick={() => handleRemoveItem("legalLinks", null, idx)}>
                    Remove
                  </button>
                </div>
              ))}
              <button className="text-blue-500 text-xs mt-1" onClick={() => handleAddItem("legalLinks")}>+ Add Legal Link</button>
            </div>
            {/* Social Links */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Social Links</h3>
              {editConfig.socialLinks.map((social, idx) => (
                <div key={idx} className="flex gap-2 mb-1 items-center">
                  <input
                    className="border px-1 py-0.5 text-xs"
                    value={social.icon}
                    onChange={e => handleArrayChange("socialLinks", null, idx, "icon", e.target.value)}
                    placeholder="Icon Path"
                  />
                  <input
                    className="border px-1 py-0.5 text-xs"
                    value={social.href}
                    onChange={e => handleArrayChange("socialLinks", null, idx, "href", e.target.value)}
                    placeholder="Href"
                  />
                  <input
                    className="border px-1 py-0.5 text-xs"
                    value={social.alt}
                    onChange={e => handleArrayChange("socialLinks", null, idx, "alt", e.target.value)}
                    placeholder="Alt"
                  />
                  <button className="text-red-500 text-xs" onClick={() => handleRemoveItem("socialLinks", null, idx)}>
                    Remove
                  </button>
                </div>
              ))}
              <button className="text-blue-500 text-xs mt-1" onClick={() => handleAddItem("socialLinks")}>+ Add Social Link</button>
            </div>
            {/* Footer Note, Made With, CTA */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Footer Note & CTA</h3>
              <input
                className="border px-1 py-0.5 text-xs w-full mb-1"
                value={editConfig.footerNote}
                onChange={e => handleInputChange(e, ["footerNote"])}
                placeholder="Footer Note"
              />
              <input
                className="border px-1 py-0.5 text-xs w-full mb-1"
                value={editConfig.madeWith}
                onChange={e => handleInputChange(e, ["madeWith"])}
                placeholder="Made With"
              />
              <div className="flex gap-2 mb-1">
                <input
                  className="border px-1 py-0.5 text-xs"
                  value={editConfig.cta.label}
                  onChange={e => handleInputChange(e, ["cta", "label"])}
                  placeholder="CTA Label"
                />
                <input
                  className="border px-1 py-0.5 text-xs"
                  value={editConfig.cta.href}
                  onChange={e => handleInputChange(e, ["cta", "href"])}
                  placeholder="CTA Href"
                />
              </div>
            </div>
            {/* Save/Cancel */}
            <div className="flex gap-4 justify-end mt-4">
              <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={handleSave}>Save</button>
              <button className="px-3 py-1 bg-gray-300 rounded" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </footer>
    </>
   
  );
}

export default Footer;
