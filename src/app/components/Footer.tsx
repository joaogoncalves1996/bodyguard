import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#C5A572]/15">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[#CFCABB]">
          <Image src="/body-guard.png" alt="logo" width={40} height={40} />
          <span>© {new Date().getFullYear()} BodyGuard</span>
        </div>
        <div className="flex items-center gap-6 text-[#A5A39B]">
          <a className="hover:text-[#EAE7DE] transition" href="#">
            Termos
          </a>
          <a className="hover:text-[#EAE7DE] transition" href="#">
            Privacidade
          </a>
          <a className="hover:text-[#EAE7DE] transition" href="#">
            Conformidade
          </a>
        </div>
      </div>
    </footer>
  );
}
