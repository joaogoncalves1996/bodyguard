import { Briefcase, Car, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Bullet from "./Bullet";

export default function Services() {
  return (
    <section id="servicos" className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Serviços Principais</h2>
        <p className="text-[#A5A39B] mt-2">
          Soluções modulares para diferentes perfis de risco.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/15">
          <CardHeader className="border-b border-[#C5A572]/10 h-22">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-[#C5A572]" /> Proteção Pessoal
            </CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Equipa discreta, experiente e bilingue.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <Bullet>Planeamento de rotas e perfis</Bullet>
              <Bullet>Proteção de executivos e famílias</Bullet>
              <Bullet>Gestão de imprensa e curiosos</Bullet>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="bg-[#0B0E11] border border-[#C5A572]/30 text-[#EAE7DE] hover:bg-[#14181D]">
              Saber mais
            </Button>
          </CardFooter>
        </Card>

        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/15">
          <CardHeader className="border-b border-[#C5A572]/10 h-22">
            <CardTitle className="flex items-center gap-2">
              <Car className="h-5 w-5 text-[#C5A572]" /> Transporte Seguro
            </CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Viaturas discretas e seguras, condutores formados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <Bullet>Escoltas e transferes</Bullet>
              <Bullet>Rotas alternativas e contingência</Bullet>
              <Bullet>Monitorização em tempo real</Bullet>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="bg-[#0B0E11] border border-[#C5A572]/30 text-[#EAE7DE] hover:bg-[#14181D]">
              Saber mais
            </Button>
          </CardFooter>
        </Card>

        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/15">
          <CardHeader className="border-b border-[#C5A572]/10 h-22">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-[#C5A572]" />
              Consultoria & Residência
            </CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Avaliação de risco, auditorias e segurança residencial.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <Bullet>Mapeamento de ameaças</Bullet>
              <Bullet>Protocolos para staff doméstico</Bullet>
              <Bullet>Gestão de eventos privados</Bullet>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="bg-[#0B0E11] border border-[#C5A572]/30 text-[#EAE7DE] hover:bg-[#14181D]">
              Saber mais
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
