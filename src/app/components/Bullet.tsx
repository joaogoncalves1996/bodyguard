import { CheckCircle2 } from "lucide-react";

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm leading-6 text-[#EAE7DE]">
    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-[#C5A572]" />
    <span className="text-[#CFCABB]">{children}</span>
  </li>
);

export default Bullet;
