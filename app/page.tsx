export default function Home() {
  return (
    <main
      id="lorem"
      className="grid min-h-svh place-items-center px-[clamp(1.5rem,7vw,7rem)] py-[clamp(3rem,9vh,7.5rem)] selection:bg-[oklch(0.82_0.045_82/0.72)] selection:text-ink max-sm:justify-items-start"
    >
      <article className="w-full max-w-[62rem]">
        <header className="mb-[clamp(2.6rem,5.5vw,3.4rem)] flex items-center gap-[clamp(1rem,2vw,1.4rem)] max-sm:mb-9">
          <div
            className="relative grid size-[clamp(4rem,6vw,5rem)] shrink-0 place-items-center overflow-hidden rounded-full border border-rule text-ink-muted max-sm:size-[3.75rem]"
            aria-hidden="true"
          >
            <span className="absolute h-1/4 w-[61%] rotate-[18deg] rounded-full border border-current" />
            <span className="absolute h-1/4 w-[61%] rotate-[72deg] rounded-full border border-current" />
            <span className="absolute h-1/4 w-[61%] rotate-[132deg] rounded-full border border-current" />
          </div>

          <div>
            <h1 className="m-0 text-[clamp(1.35rem,2vw,1.8rem)] leading-[1.16] font-[620] tracking-[-0.025em]">
              Lorem Ipsum
            </h1>
            <p className="mt-[0.22rem] mb-0 text-[clamp(1.35rem,2vw,1.8rem)] leading-[1.16] font-normal tracking-[-0.025em] text-ink-muted">
              Dolor sit amet, consectetur
            </p>
          </div>
        </header>

        <div className="text-[clamp(1.15rem,1.65vw,1.8rem)] leading-[1.58] font-normal tracking-[-0.015em] text-ink-body max-sm:leading-[1.54]">
          <p className="m-0 text-pretty">
            Lorem ipsum dolor sit amet, consectetur {" "}
            <a
              className="rounded-[0.1em] font-[520] text-ink underline decoration-rule decoration-from-font underline-offset-[0.18em] transition-colors duration-150 ease-out hover:text-ink-muted hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              href="#adipiscing"
            >
              adipiscing elit
            </a>
            , sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis {" "}
            <em className="text-ink italic">nostrud exercitation</em> ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p id="adipiscing" className="mt-[1.2em] mb-0 scroll-mt-8 text-pretty">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur {" "}
            <a
              className="rounded-[0.1em] font-[520] text-ink underline decoration-rule decoration-from-font underline-offset-[0.18em] transition-colors duration-150 ease-out hover:text-ink-muted hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              href="#lorem"
            >
              sint occaecat
            </a>{" "}
            cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>
    </main>
  );
}
