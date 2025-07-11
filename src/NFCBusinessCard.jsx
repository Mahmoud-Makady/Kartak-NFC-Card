import React from "react";
import logo from "./assets/Kartak.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faPhone,
  faEnvelope,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export default function NFCBusinessCard() {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center px-4 pb-2">
      <div className="container shadow-lg rounded-xl backdrop-blur-md border border-zinc-800 max-w-md mx-auto">
        <div className="w-full text-center space-y-6 p-8 ">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="KARTAK Logo" className="object-contain logo" />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Kartak – Your Smart Identity in One Tap
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:+971507817504"
              className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl text-white "
            >
              <FontAwesomeIcon icon={faPhone} /> Call me
            </a>
            <a
              href="mailto:hamadamostafa970@gmail.com"
              className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl text-white "
            >
              <FontAwesomeIcon icon={faEnvelope} /> Send Email
            </a>
            <a
              href="https://wa.me/971502089718"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl text-white "
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp Now
            </a>
            <a
              href="https://kartak-nfc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl text-white "
            >
              <FontAwesomeIcon icon={faGlobe} /> Visit Our Website
            </a>
            <a
              href="/mohamed-mostafa.vcf"
              download
              className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-xl text-white "
            >
              <FontAwesomeIcon icon={faAddressCard} /> Save Contact
            </a>
          </div>

          {/* Descriptions */}
          <div className="pt-6 border-t border-zinc-700 text-sm space-y-3">
            <p>
              Discover <span className="kartak">Kartak</span> — the smart NFC
              business cards designed for professionals and entrepreneurs.
              Instantly share your contact details, social links, and more with
              just one tap. Upgrade your network today!
            </p>
            <p dir="rtl">
              اكتشف <span className="kartak">كارتك</span> — كروت NFC ذكية مصممة
              للمحترفين وأصحاب الأعمال، شارك بياناتك وروابطك الاجتماعية بسرعة
              وسهولة بلمسة واحدة، طور تواصلك مع عملائك اليوم
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
