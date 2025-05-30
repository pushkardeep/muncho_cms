import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Images/logo.png";
import BigBtn from "./common/BigBtn"; // Adjust the import path as necessary

function Footer() {
  return (
    <footer className="bg-[#EBEBEC] font-inter text-sm font-medium leading-[22px] tracking-[-0.2px] px-4 md:px-20 py-10 md:py-16 text-black">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src={Logo} // Replace with your actual path
            alt="Talkin' Tacos Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-x-12">
          <div className="space-y-2 flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/catering">Catering</Link>
            <Link href="/gift-cards">Gift Cards</Link>
          </div>
          <div className="space-y-2 flex flex-col">
            <Link href="/menu">Menu</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/press">Press</Link>
          </div>
          <div className="space-y-2 flex flex-col">
            <Link href="/sweepstakes">Sweepstakes</Link>
            <Link href="/team">Meet Our Team</Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <BigBtn title={"Order Now"} link={"/"} />
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-t border-gray-300" />

      {/* Legal Links */}
      <div className="flex flex-wrap justify-start md:justify-start gap-6 text-gray-600 text-xs md:text-sm">
        <Link href="/order-terms">Order Terms</Link>
        <Link href="/terms">Terms of Use</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/accessibility">Accessibility Statement</Link>
      </div>
    </footer>
  );
}

export default Footer;
