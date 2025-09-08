"use client";

import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

  const valid = () => {
    if (!name.trim()) return false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
    if (!/^\+?\d[\d\s()-]{6,}$/.test(telefone)) return false;
    if (!subject.trim()) return false;
    if (message.trim().length === 0) return false;
    return true;
  };

  const handleSend = async () => {
    if (!valid()) {
      toast.error("Erro ao enviar. Tente novamente.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          email,
          telefone,
          subject,
          message,
        },
        { publicKey: PUBLIC_KEY }
      );
      toast.success("Pedido enviado com sucesso!");

      setName("");
      setEmail("");
      setTelefone("");
      setSubject("");
      setMessage("");
    } catch (e) {
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Peça uma Avaliação de Risco
          </h2>
          <p className="text-[#A5A39B] mt-2">
            Conte-nos o essencial e um especialista entrará em contacto de forma
            confidencial.
          </p>
          <div className="mt-6 space-y-3 text-sm text-[#CFCABB]">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#C5A572]" /> +351 969 287 413
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#C5A572]" /> contacto@bodyguard.pt
            </div>
          </div>
        </div>

        <Card className="rounded-2xl bg-[#0F1216] border border-[#C5A572]/20">
          <CardHeader>
            <CardTitle>Formulário Confidencial</CardTitle>
            <CardDescription className="text-[#A5A39B]">
              Resposta em até 2h úteis
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#0B0E11] border-[#2A2F35] text-[#EAE7DE] placeholder:text-[#777]"
              />
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0B0E11] border-[#2A2F35] text-[#EAE7DE] placeholder:text-[#777]"
              />
            </div>

            <Input
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="bg-[#0B0E11] border-[#2A2F35] text-[#EAE7DE] placeholder:text-[#777]"
            />

            <Input
              placeholder="Assunto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#0B0E11] border-[#2A2F35] text-[#EAE7DE] placeholder:text-[#777]"
            />

            <Textarea
              placeholder="Descreva a sua necessidade (datas, locais, perfis, etc.)"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#0B0E11] border-[#2A2F35] text-[#EAE7DE] placeholder:text-[#777]"
            />
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <div className="text-xs text-[#9B998F]">
              Dados tratados com confidencialidade.
            </div>
            <Button
              onClick={handleSend}
              disabled={loading}
              className="bg-gradient-to-br from-[#C5A572] to-[#B79248] text-[#0B0E11] hover:opacity-95 disabled:opacity-60 text-nowrap"
            >
              {loading ? "A enviar..." : "Enviar Pedido"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
