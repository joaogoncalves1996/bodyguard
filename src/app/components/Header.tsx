import Image from "next/image";
import { Languages, Sun, Moon } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0E11]/60 border-b border-[#C5A572]/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src="/body-guard.png" alt="logo" width={40} height={40} />
            <div>
              <p className="font-semibold leading-tight tracking-[0.02em]">
                BodyGuard
              </p>
              <p className="text-[11px] text-[#A5A39B]">
                Segurança Privada · Portugal
              </p>
            </div>
          </div>
          <Badge
            className="ml-2 bg-[#191C20] text-[#C5A572] border border-[#C5A572]/30"
            variant="secondary"
          >
            PT
          </Badge>
          <div className="hidden md:flex items-center gap-1 text-xs text-[#9B998F]">
            <Languages className="h-4 w-4" /> <span>EN em breve</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              ["#servicos", "Serviços"],
              ["#investimento", "Investimento"],
              ["#roadmap", "Expansão"],
              ["#contacto", "Contacto"],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="text-[#CFCABB] hover:text-white transition relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-[#C5A572] after:to-transparent hover:after:w-full after:transition-all"
              >
                {label}
              </a>
            ))}
          </nav>
          <Button
            className="hidden sm:inline-flex bg-gradient-to-br from-[#C5A572] to-[#B79248] text-[#0B0E11] hover:opacity-95 shadow-[0_8px_24px_rgba(197,165,114,0.25)] text-nowrap"
            onClick={() => router.push("/#contacto")}
          >
            Pedir Avaliação
          </Button>
        </div>
      </div>
    </header>
  );
}
