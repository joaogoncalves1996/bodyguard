import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Bullet from "./Bullet";

export default function Roadmap() {
  return (
    <section id="roadmap" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Roadmap de Expansão
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/15">
          <CardHeader>
            <CardTitle>Fase 1 · Portugal</CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Go-to-market e prova de valor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <Bullet>Norte, Lisboa, Comporta, Algarve</Bullet>
              <Bullet>Parcerias com hotéis 5★</Bullet>
              <Bullet>Integração com serviços de transfer exclusivos</Bullet>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/15">
          <CardHeader>
            <CardTitle>Fase 2 · Ibéria</CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Madrid, Barcelona e costa sul
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <Bullet>Joint-ventures locais</Bullet>
              <Bullet>Treino e certificação integrados</Bullet>
              <Bullet>Oferta multilíngua</Bullet>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/15">
          <CardHeader>
            <CardTitle>Fase 3 · Premium+</CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Produtos e tecnologia
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <Bullet>App do cliente com SOS</Bullet>
              <Bullet>Inteligência artificial para análise de risco</Bullet>
              <Bullet>Integrações com seguros</Bullet>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
