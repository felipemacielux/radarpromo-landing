import { Brand } from "./Brand";
import { CTAButton } from "./CTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/8 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-[#07130c]/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Brand />

        <CTAButton />
      </div>
    </header>
  );
}
