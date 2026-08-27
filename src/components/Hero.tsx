import { motion, useReducedMotion } from "motion/react";
import type { Oferta } from "../types";
import { CTAButton } from "./CTAButton";
import { OfferCard } from "./OfferCard";

interface HeroProps {
  destaque: Oferta;
}

export function Hero({ destaque }: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-16">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start gap-6 text-left"
      >
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-ink sm:text-5xl dark:text-brand-mint">
          As melhores promoções, direto no seu WhatsApp.
        </h1>
        <p className="max-w-md text-base text-brand-ink/65 sm:text-lg dark:text-brand-mint/70">
          Cupons e descontos verificados todos os dias. Sem spam, sem
          enrolação, só oferta boa pra economizar de verdade.
        </p>
        <CTAButton size="large" />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[280px] sm:max-w-xs"
      >
        <OfferCard oferta={destaque} className="shadow-[0_24px_60px_-16px_rgba(7,61,36,0.35)]" />
      </motion.div>
    </section>
  );
}
