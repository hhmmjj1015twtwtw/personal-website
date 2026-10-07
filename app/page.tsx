import Image from "next/image"

import { CopyEmail } from "@/components/copy-email"
import { SiteHeader } from "@/components/site-header"
import { buttonVariants } from "@/components/ui/button"
import {
  hero,
  mailto,
  portrait,
  pricing,
  site,
  subjects,
  work,
  type Photo,
} from "@/lib/site"
import { cn } from "@/lib/utils"

function SectionLabel({
  index,
  children,
}: {
  index: string
  children: string
}) {
  return (
    <p className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
      <span>{index}</span>
      <span aria-hidden className="h-px w-10 bg-border" />
      <span>{children}</span>
    </p>
  )
}

function Caption({ photo, index }: { photo: Photo; index?: number }) {
  return (
    <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[0.7rem] tracking-wide text-muted-foreground">
      <span>
        {index !== undefined && (
          <span className="mr-3 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        {photo.title}
      </span>
      <span className="shrink-0">
        {[photo.place, photo.year].filter(Boolean).join(", ")}
      </span>
    </figcaption>
  )
}

// Rows alternate a wide frame and a tall frame, swapping sides each row.
const workLayout = [
  "md:col-span-7",
  "md:col-span-5 md:mt-16",
  "md:col-span-5",
  "md:col-span-7 md:mb-16",
]

function WorkItem({ photo, index }: { photo: Photo; index: number }) {
  const isWide = photo.width > photo.height

  return (
    <figure
      className={cn("md:self-end", workLayout[index % workLayout.length])}
    >
      <div className="overflow-hidden bg-muted">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={
            isWide
              ? "(min-width: 1280px) 720px, (min-width: 768px) 58vw, 100vw"
              : "(min-width: 1280px) 520px, (min-width: 768px) 42vw, 100vw"
          }
          className="h-auto w-full transition-transform duration-700 ease-out hover:scale-[1.015] motion-reduce:transition-none motion-reduce:hover:scale-100"
        />
      </div>
      <Caption photo={photo} index={index} />
    </figure>
  )
}

export default function Page() {
  const year = new Date().getFullYear()

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-foreground px-4 py-2 font-mono text-xs text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div id="top" />
      <SiteHeader />

      <main id="main">
        {/* Introduction */}
        <section
          aria-labelledby="intro-heading"
          className="mx-auto max-w-7xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 md:pb-24"
        >
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
            {site.role} — {site.location}
          </p>
          <h1
            id="intro-heading"
            className="mt-8 max-w-4xl font-heading text-5xl leading-[1.05] font-light tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Photographs of people and places,{" "}
            <em className="italic">made slowly</em>, in natural light.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            I’m {site.name}, a photographer based in {site.location}. I make
            portraits, photograph small weddings, and take on editorial work for
            people who care about how a picture feels as much as how it looks.
          </p>
        </section>

        <figure className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden bg-muted">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              sizes="(min-width: 1280px) 1216px, 100vw"
              preload
              className="h-auto w-full"
            />
          </div>
          <Caption photo={hero} />
        </figure>

        {/* Work */}
        <section
          id="work"
          aria-labelledby="work-heading"
          className="mx-auto max-w-7xl scroll-mt-14 px-5 pt-32 sm:px-8 md:pt-44"
        >
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel index="01">Work</SectionLabel>
              <h2
                id="work-heading"
                className="mt-6 font-heading text-4xl font-light tracking-tight sm:text-5xl"
              >
                Selected photographs
              </h2>
            </div>
            <p className="max-w-md self-end text-muted-foreground md:col-span-5 md:col-start-8">
              A small selection from recent years — portraits, weddings and the
              places in between. A full gallery for any project is available on
              request.
            </p>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-12 md:gap-y-20">
            {work.map((photo, index) => (
              <WorkItem key={photo.id} photo={photo} index={index} />
            ))}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="mx-auto max-w-7xl scroll-mt-14 px-5 pt-32 sm:px-8 md:pt-44"
        >
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <figure className="md:col-span-5">
              <div className="overflow-hidden bg-muted">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  width={portrait.width}
                  height={portrait.height}
                  sizes="(min-width: 1280px) 500px, (min-width: 768px) 42vw, 100vw"
                  className="h-auto w-full grayscale"
                />
              </div>
            </figure>

            <div className="md:col-span-6 md:col-start-7">
              <SectionLabel index="02">About</SectionLabel>
              <h2
                id="about-heading"
                className="mt-6 font-heading text-4xl font-light tracking-tight sm:text-5xl"
              >
                Hello, I’m {site.name}.
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  I started photographing my family with a borrowed film camera
                  and never really stopped. Today I work between Taipei and
                  wherever the work takes me, mostly with available light and as
                  little equipment as the job allows.
                </p>
                <p>
                  My aim is simple: to be quiet enough that people forget about
                  the camera, and attentive enough to notice what they’ll want
                  to remember.
                </p>
              </div>

              <h3 className="mt-14 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                What I photograph
              </h3>
              <dl className="mt-4 divide-y divide-border border-y border-border">
                {subjects.map((subject) => (
                  <div
                    key={subject.title}
                    className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
                  >
                    <dt className="font-heading text-xl">{subject.title}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">
                      {subject.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className="mx-auto max-w-7xl scroll-mt-14 px-5 pt-32 sm:px-8 md:pt-44"
        >
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel index="03">Pricing</SectionLabel>
              <h2
                id="pricing-heading"
                className="mt-6 font-heading text-4xl font-light tracking-tight sm:text-5xl"
              >
                Where to begin
              </h2>
            </div>
            <p className="max-w-md self-end text-muted-foreground md:col-span-5 md:col-start-8">
              Starting points for the most common kinds of work. Every project
              is a little different, so I’ll send a proper quote once we’ve
              talked.
            </p>
          </div>

          <ul className="mt-16 grid border-t border-border md:grid-cols-3">
            {pricing.plans.map((plan) => (
              <li
                key={plan.name}
                className="flex flex-col border-b border-border py-10 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <h3 className="font-heading text-3xl font-light">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.summary}
                </p>
                <p className="mt-8 flex items-baseline gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {pricing.currency}
                  </span>
                  <span className="font-heading text-5xl font-light tabular-nums">
                    {plan.price}
                  </span>
                </p>
                <p className="mt-1 font-mono text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                  {plan.unit}
                </p>
                <ul className="mt-8 space-y-3 text-sm">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[0.6em] h-px w-3 shrink-0 bg-foreground/40"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-start md:justify-between">
            <ul className="space-y-1 text-sm text-muted-foreground">
              {pricing.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <a
              href={mailto}
              className={cn(
                buttonVariants({ size: "lg" }),
                "px-5 font-mono tracking-wide uppercase"
              )}
            >
              Ask about a date
            </a>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="mx-auto max-w-7xl scroll-mt-14 px-5 py-32 sm:px-8 md:py-44"
        >
          <SectionLabel index="04">Contact</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-6 max-w-3xl font-heading text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            Tell me what you have in mind. I usually reply within two days.
          </h2>
          <a
            href={mailto}
            className="mt-12 inline-block font-heading text-3xl break-all underline decoration-border decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-foreground sm:text-5xl lg:text-6xl"
          >
            {site.email}
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CopyEmail email={site.email} />
            <a
              href={site.instagram}
              className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <span className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
              {site.location}
            </span>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 font-mono text-[0.7rem] tracking-wide text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.name}. All photographs by the author.
          </p>
          <div className="flex gap-6">
            <a
              href={mailto}
              className="transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
