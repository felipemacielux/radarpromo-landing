import { MagnifyingGlass, ShieldCheck, Tag } from "@phosphor-icons/react";

const items = [
  {
    icon: MagnifyingGlass,
    text: "Ofertas garimpadas e conferidas à mão, todos os dias",
  },
  {
    icon: Tag,
    text: "Cupom e link prontos, é só copiar e comprar",
  },
  {
    icon: ShieldCheck,
    text: "Grupo focado em oferta, sem spam e sem enrolação",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-brand-ink/8 bg-brand-mint/50 dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-brand-ink/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 dark:divide-white/10">
        {items.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 py-6 sm:flex-col sm:items-center sm:gap-3 sm:px-6 sm:text-center"
          >
            <Icon
              weight="bold"
              className="h-6 w-6 shrink-0 text-brand-green-deep dark:text-brand-green"
            />
            <p className="text-sm font-medium text-brand-ink/80 dark:text-brand-mint/80">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
