import { CTAButton } from "./CTAButton";

export function CTABanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-brand-mint px-6 py-14 text-center dark:bg-white/5">
        <h2 className="max-w-lg text-2xl font-extrabold tracking-tight text-brand-green-deep sm:text-3xl dark:text-brand-mint">
          Não perca as próximas ofertas
        </h2>
        <p className="max-w-sm text-sm text-brand-green-deep/70 sm:text-base dark:text-brand-mint/70">
          Toda promoção boa passa primeiro pelo grupo. Entre agora e garanta
          o seu desconto antes que acabe o estoque.
        </p>
        <CTAButton size="large" />
      </div>
    </section>
  );
}
