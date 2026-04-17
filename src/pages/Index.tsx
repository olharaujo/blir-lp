import { Check } from "lucide-react";
import logoBliver from "@/assets/logo-bliver.png";

const Nav = () => (
  <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <a href="#" className="flex items-center">
          <img src={logoBliver} alt="Bliver" className="h-7 w-auto" />
        </a>
      </div>
      <a
        href="#waitlist"
        className="text-xs font-medium px-3.5 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
      >
        Entrar na lista
      </a>
    </div>
  </header>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="label-eyebrow mb-6">{children}</p>
);

const Hero = () => (
  <section className="border-b border-border">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 py-20 lg:py-28">
      <div className="animate-fade-up">
        <Eyebrow>Acesso antecipado</Eyebrow>
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05]">
          Seus agentes de IA prontos, sem precisar configurar nada.
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
          Crie agentes especializados em <span className="text-foreground font-medium">1 clique</span>, conecte suas contas
          (Gmail, Calendar, GitHub…) e deixe eles trabalharem <span className="text-foreground font-medium">24 horas por dia</span> no seu lugar.
          Sem servidor, sem infraestrutura, sem dor de cabeça.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {["Pronto em 60 segundos", "Sem código", "Pague pelo uso"].map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <WaitlistCard />
    </div>
  </section>
);

const WaitlistCard = () => (
  <div id="waitlist" className="surface-card p-6 md:p-8 self-start animate-fade-up" style={{ animationDelay: "0.1s" }}>
    <p className="label-eyebrow text-center mb-3">Lista de espera</p>
    <p className="text-sm text-muted-foreground text-center mb-6">
      Liberamos o acesso em lotes. Entre na fila para ser um dos primeiros.
    </p>
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-xs font-medium mb-1.5">Nome</label>
        <input
          className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label className="block text-xs font-medium mb-1.5">WhatsApp</label>
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 bg-background border border-border rounded-md px-3 text-sm">
            <span>🇧🇷</span>
            <span className="text-muted-foreground">+55</span>
          </div>
          <input
            className="flex-1 bg-background border border-border rounded-md px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition"
            placeholder="11 99999-9999"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium mb-1.5">E-mail</label>
        <input
          type="email"
          className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition"
          placeholder="voce@empresa.com"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium py-2.5 rounded-md transition-colors flex items-center justify-center gap-2 group"
      >
        Entrar na lista de espera
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </button>
      <p className="text-[11px] text-muted-foreground text-center">
        Sem spam. Avisamos assim que liberar o acesso.
      </p>
    </form>
  </div>
);

const CreateSection = () => (
  <section className="border-b border-border">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 py-20">
      <div>
        <Eyebrow>Criação em 1 clique</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Descreva o agente. A gente monta.
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Escolha um modelo pronto ou descreva em linguagem natural o que você precisa.
          Em segundos, o agente está no ar, conectado às suas contas e pronto para trabalhar.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-accent mt-0.5">✦</span>
            Modelos prontos: Recrutador, SDR, Secretária, Ad Creative…
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5">✧</span>
            Criador por linguagem natural para agentes sob medida
          </li>
        </ul>
      </div>

      <div className="surface-card p-5">
        <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
          <span className="text-accent">✦</span> Novo agente
        </p>
        <div className="bg-background border border-border rounded-md p-4 text-sm text-muted-foreground min-h-[100px]">
          Um agente que monitora menções da marca no Twitter e me avisa no WhatsApp quando algo viralizar.
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-xs bg-foreground text-background px-3 py-1.5 rounded-md font-medium hover:bg-foreground/90 transition">
            Criar em 1 clique
          </button>
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-success border-t border-border pt-4">
          <Check className="h-3.5 w-3.5" />
          Agente criado e rodando
        </div>
      </div>
    </div>
  </section>
);

type AgentCard = { name: string; tag: string; tools: string[] };
const agents: AgentCard[] = [
  { name: "AI Recruiter", tag: "RH", tools: ["GMAIL", "CALENDAR"] },
  { name: "AI SDR", tag: "VENDAS", tools: ["GMAIL", "CALENDAR"] },
  { name: "AI Secretary", tag: "PRODUTIVIDADE", tools: ["GMAIL", "CALENDAR"] },
  { name: "Ad Creative", tag: "MARKETING", tools: ["POST", "STATS"] },
  { name: "SEO Audit", tag: "SEO", tools: ["WEB"] },
  { name: "GA4 Setup", tag: "ANALYTICS", tools: ["ANALYTICS"] },
];

const Catalog = () => (
  <section className="border-b border-border">
    <div className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Eyebrow>Catálogo</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Agentes prontos para papéis reais.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Recrutador, SDR, Secretária, Ad Creative, SEO — cada um com instruções testadas, os conectores certos e ferramentas específicas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {agents.map((a) => (
          <div
            key={a.name}
            className="surface-card p-5 hover:border-accent/40 transition-colors group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-12">
              <div className="h-7 w-7 rounded-md bg-secondary flex items-center justify-center text-xs">
                <span className="text-accent">◆</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {a.tag}
              </span>
            </div>
            <h3 className="font-semibold mb-3">{a.name}</h3>
            <div className="flex gap-1.5 flex-wrap">
              {a.tools.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground bg-background border border-border rounded px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const connectors = [
  { name: "Gmail", color: "bg-red-500" },
  { name: "Calendar", color: "bg-blue-500" },
  { name: "GitHub", color: "bg-foreground" },
  { name: "Slack", color: "bg-purple-500" },
  { name: "Linear", color: "bg-indigo-500" },
  { name: "Notion", color: "bg-foreground" },
];

const Connectors = () => (
  <section className="border-b border-border">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 py-20 items-center">
      <div className="surface-card p-6 order-2 lg:order-1">
        <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
          <span className="text-accent">◆</span> Conectores
        </p>
        <div className="grid grid-cols-3 gap-2">
          {connectors.map((c) => (
            <div
              key={c.name}
              className="bg-background border border-border rounded-md px-3 py-2.5 flex items-center gap-2 text-xs"
            >
              <span className={`h-2 w-2 rounded-full ${c.color}`} />
              {c.name}
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-success animate-pulse-dot" />
            </div>
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <Eyebrow>Conectado às suas ferramentas</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Conecte suas contas. O agente usa.
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Gmail, Google Calendar, GitHub, Slack, Linear, Notion e mais. Você conecta uma vez,
          com segurança — o agente envia e-mail, cria evento, abre pull request, responde no Slack.
          Tudo no seu nome.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-accent mt-0.5">✦</span>
            Conexão segura — você desconecta quando quiser
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5">✧</span>
            Integração personalizada — qualquer API vira ferramenta
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const schedule = [
  { time: "07:00", task: "Resumo do dia por e-mail", status: "CONCLUÍDO", done: true },
  { time: "09:00", task: "Triagem de novos leads", status: "ROTANDO", done: false },
  { time: "14:00", task: "Acompanhamento de propostas", status: "AGENDADO", done: false },
  { time: "18:00", task: "Resumo do fim do dia", status: "AGENDADO", done: false },
];

const Schedule = () => (
  <section className="border-b border-border">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 py-20">
      <div>
        <Eyebrow>Execução 24 horas</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Trabalham sozinhos. Todo dia. Toda hora.
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Agende execuções recorrentes — resumo diário às 7h, triagem de leads a cada hora,
          acompanhamento de propostas no horário certo. Enquanto você dorme, o agente trabalha.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-accent mt-0.5">⏱</span>
            Agendamento visual — simples como o Google Calendar
          </li>
          <li className="flex gap-3">
            <span className="text-accent mt-0.5">◴</span>
            Histórico de cada execução, com custo e resultado
          </li>
        </ul>
      </div>

      <div className="surface-card p-5">
        <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
          <span className="text-accent">◴</span> Agenda do agente — hoje
        </p>
        <div className="space-y-1">
          {schedule.map((s) => (
            <div
              key={s.time}
              className="flex items-center gap-4 bg-background border border-border rounded-md px-4 py-3 text-sm"
            >
              <span className="font-mono text-xs text-muted-foreground w-12">{s.time}</span>
              <span className="flex-1">{s.task}</span>
              <span
                className={`text-[10px] font-mono uppercase tracking-wider ${
                  s.done ? "text-success" : "text-muted-foreground"
                }`}
              >
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="border-b border-border">
    <div className="container py-24 text-center max-w-2xl mx-auto">
      <Eyebrow>Acesso antecipado</Eyebrow>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Entre agora. Use primeiro.
      </h2>
      <p className="mt-5 text-muted-foreground">
        Liberamos o acesso em ondas para os primeiros da lista. Quanto antes você entrar, antes começa a usar.
      </p>
      <div className="mt-8">
        <a
          href="#waitlist"
          className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-5 py-3 rounded-md hover:bg-foreground/90 transition-colors group"
        >
          Entrar na lista de espera
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10">
    <div className="container text-center text-xs text-muted-foreground">
      <p>© 2026 bliver</p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Nav />
    <main>
      <Hero />
      <CreateSection />
      <Catalog />
      <Connectors />
      <Schedule />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
