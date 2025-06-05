import React from "react";
import BigBtn from "./Components/Common/BigBtn";
import TabHeading from "../Common/TabHeading";

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

function Footer() {
  const footerConfig = defaultFooterConfig;
  const { links, legalLinks, socialLinks, footerNote, madeWith, cta } = footerConfig;

  return (
    <>
      <div className="w-full h-fit">
        <TabHeading
          title={"Footer"}
          description={
            "The Footer comes at the very last of the website, this section has links to every section on the website. You can enable and disable the links."
          }
        />
      </div>
      <footer className="bg-[#EBEBEC] font-inter text-sm font-medium leading-[22px] tracking-[-0.2px] px-4 md:px-20 py-10 md:py-16 text-black relative">
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
      </footer>
    </>
  );
}

export default Footer;
