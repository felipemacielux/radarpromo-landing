import { CaretDown, CaretUp, WhatsappLogo } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Oferta } from "../types";
import { EmptyState } from "./EmptyState";
import { OfferRow } from "./OfferRow";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/PLACEHOLDER";
const MAX_ITEMS = 9;
const ITEMS_PER_PAGE = 3;
const AUTOPLAY_MS = 5000;

interface OfferCarouselProps {
  ofertas: Oferta[];
}

export function OfferCarousel({ ofertas }: OfferCarouselProps) {
  const capped = ofertas.slice(0, MAX_ITEMS);
  const hasMoreBeyondCap = ofertas.length > MAX_ITEMS;
  const pageCount = Math.ceil(capped.length / ITEMS_PER_PAGE);

  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (pageCount <= 1 || isPaused) return;
    const id = setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [pageCount, isPaused]);

  if (capped.length === 0) {
    return <EmptyState />;
  }

  const goTo = (next: number) => {
    setPage(((next % pageCount) + pageCount) % pageCount);
  };

  const visible = capped.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-6">
      <div
        className="flex items-stretch gap-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3"
            >
              {visible.map((oferta) => (
                <OfferRow key={`${oferta.titulo}-${oferta.loja}`} oferta={oferta} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {pageCount > 1 && (
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Ofertas anteriores"
              onClick={() => goTo(page - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink/60 transition-colors duration-300 hover:border-brand-green hover:text-brand-green dark:border-white/15 dark:text-brand-mint/60"
            >
              <CaretUp weight="bold" className="h-4 w-4" />
            </button>

            <div className="flex flex-col gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para página ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    i === page
                      ? "bg-brand-green"
                      : "bg-brand-ink/15 dark:bg-white/15"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Próximas ofertas"
              onClick={() => goTo(page + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-ink/15 text-brand-ink/60 transition-colors duration-300 hover:border-brand-green hover:text-brand-green dark:border-white/15 dark:text-brand-mint/60"
            >
              <CaretDown weight="bold" className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {hasMoreBeyondCap && (
        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-brand-green-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(7,61,36,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] dark:bg-brand-green dark:text-brand-green-deep"
        >
          <WhatsappLogo weight="fill" className="h-5 w-5" />
          Ver mais ofertas no grupo
        </a>
      )}
    </div>
  );
}
