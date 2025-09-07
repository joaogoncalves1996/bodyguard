import { Rocket, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Bullet from "./Bullet";

export default function Investments() {
  return (
    <section id="investimento" className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Investimento & Retorno
          </h2>
          <p className="text-[#A5A39B] mt-2">
            Base para captação de parceiros e investidores.
          </p>
        </div>
        <Badge
          variant="outline"
          className="text-xs border-[#C5A572]/40 text-[#CFCABB] bg-[#191C20]"
        >
          Posicionamento Premium
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-[#C5A572]" /> Investimento
              Necessário
            </CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Capacitação, marketing e operações.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <Bullet>Reforço da equipa especializada e certificada.</Bullet>
              <Bullet>Marketing internacional e posicionamento premium.</Bullet>
              <Bullet>Aquisição de viaturas discretas e seguras.</Bullet>
              <Bullet>Expansão para o mercado ibérico.</Bullet>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#C5A572]" /> Retorno para o
              Investidor
            </CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Mercado, margem e marca.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <Bullet>Mercado de segurança privada em crescimento.</Bullet>
              <Bullet>Serviços premium com boa rentabilidade.</Bullet>
              <Bullet>
                Potencial de expansão rápida com parcerias estratégicas.
              </Bullet>
              <Bullet>Imagem de marca sólida e diferenciada.</Bullet>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 rounded-2xl bg-[#0F1216] border border-[#C5A572]/15">
        <CardHeader>
          <CardTitle>Proposta de Valor ao Investidor</CardTitle>
          <CardDescription className="text-[#A5A39B]">
            Modelo escalável, contratos recorrentes e pipeline B2B.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl p-4 border border-[#C5A572]/20 bg-[#0B0E11]">
              <p className="font-semibold mb-1">Receita recorrente</p>
              <p className="text-[#CFCABB]">
                Retainers mensais de proteção pessoal e residencial.
              </p>
            </div>
            <div className="rounded-xl p-4 border border-[#C5A572]/20 bg-[#0B0E11]">
              <p className="font-semibold mb-1">Upsell premium</p>
              <p className="text-[#CFCABB]">
                Transporte seguro, auditorias e eventos privados.
              </p>
            </div>
            <div className="rounded-xl p-4 border border-[#C5A572]/20 bg-[#0B0E11]">
              <p className="font-semibold mb-1">Expansão ibérica</p>
              <p className="text-[#CFCABB]">
                Entrada faseada em Espanha com parcerias locais.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
