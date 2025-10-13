import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#C5A572]/15">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-[#CFCABB]">
          <Image
            src="/body-guard.png"
            alt="BodyGuard logo"
            width={40}
            height={40}
          />
          <span>© {new Date().getFullYear()} BodyGuard</span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[#A5A39B]">
          <a className="hover:text-[#EAE7DE] transition" href="">
            Sobre nós
          </a>
          <a className="hover:text-[#EAE7DE] transition" href="#servicos">
            Serviços
          </a>
          <a className="hover:text-[#EAE7DE] transition" href="#investimento">
            Parcerias
          </a>
          <a className="hover:text-[#EAE7DE] transition" href="#contacto">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
