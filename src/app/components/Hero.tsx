import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Car,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  Lock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useRouter } from "next/navigation";

const Feature = ({
  icon: Icon,
  title,
  desc,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  desc: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="group rounded-2xl p-6 bg-[rgba(255,255,255,0.04)] shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_1px_8px_rgba(0,0,0,0.35)] ring-1 ring-[#C5A572]/20 backdrop-blur-md border border-white/5"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-xl bg-gradient-to-br from-[#C5A572] to-[#B79248] text-[#0B0E11]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-lg tracking-tight">{title}</h3>
    </div>
    <p className="text-sm text-[#A5A39B]">{desc}</p>
  </motion.div>
);

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-4 border-[#C5A572]/40 text-[#CFCABB] bg-[#191C20]/50"
          >
            Premium · Discreto · Certificado
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Proteção privada para quem{" "}
            <span className="bg-gradient-to-r from-[#C5A572] to-[#B79248] bg-clip-text text-transparent">
              não admite riscos
            </span>
            .
          </h1>
          <p className="mt-5 text-[#CFCABB] text-lg max-w-xl">
            Equipa certificada, protocolos internacionais e viaturas discretas.
            Segurança para executivos, famílias e visitantes internacionais em
            todo o território português.
          </p>
          <div className="mt-7">
            <a href="https://wa.me/351969287413?text=Olá,%20quero%20uma%20avaliação%20da%20BodyGuard.">
              <Button className="px-5 py-3 bg-[#191C20] border border-[#C5A572]/30 text-[#EAE7DE] hover:bg-[#20242A]">
                <Phone className="h-4 w-4 mr-2" />
                Falar com um Especialista
              </Button>
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-[#9B998F]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#C5A572]" /> Equipa
              certificada
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-[#C5A572]" /> Confidencialidade
              total
            </div>
            <div className="flex items-center gap-2">
              <Car className="h-4 w-4 text-[#C5A572]" /> Viaturas discretas
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-[#C5A572] to-transparent">
            <Card className="rounded-3xl overflow-hidden bg-[#0F1216]/80 backdrop-blur-xl border border-[#C5A572]/20">
              <CardHeader>
                <CardTitle className="text-[#EAE7DE]">Protocolo 360º</CardTitle>
                <CardDescription className="text-[#A5A39B]">
                  Planeamento, proteção pessoal, deslocações e residência.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Feature
                  icon={Users}
                  title="Close Protection"
                  desc="Acompanhamento personalizado 24/7 conforme o perfil de risco."
                />
                <Feature
                  icon={Car}
                  title="Transporte Seguro"
                  desc="Rotas discretas, motorista treinado e viaturas à sua escolha."
                />
                <Feature
                  icon={MapPin}
                  title="Residência & Eventos"
                  desc="Segurança residencial e coordenação em eventos privados."
                />
                <Feature
                  icon={Globe}
                  title="Visitantes Internacionais"
                  desc="Receção em aeroportos e concierge de segurança em Portugal."
                />
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button
                  className="bg-[#191C20] border border-[#C5A572]/30 text-[#EAE7DE] hover:bg-[#20242A]"
                  onClick={() => router.push("/#servicos")}
                >
                  Ver Serviços
                </Button>
                <Button
                  className="bg-gradient-to-br from-[#C5A572] to-[#B79248] text-[#0B0E11] hover:opacity-95"
                  onClick={() => router.push("/#contacto")}
                >
                  Iniciar Avaliação
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
