// All copy, prices and photos for the site live here.
//
// Every image with `placeholder: true` is a stand-in from picsum.photos.
// Replace `src` with your own photo (e.g. "/photos/harbour-dawn.jpg" in
// /public), update `alt`, and remove the `placeholder` flag. The README lists
// each slot.

export type Photo = {
  id: string
  src: string
  alt: string
  width: number
  height: number
  title?: string
  place?: string
  year?: string
  placeholder?: boolean
}

function picsum(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}

export const site = {
  name: "J傑",
  role: "Photographer",
  location: "Taipei, Taiwan",
  email: "hello@example.com",
  instagram: "https://instagram.com/",
  description:
    "Portraits, weddings and quiet places, photographed in natural light. Based in Taipei, available for work across Taiwan and abroad.",
}

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Photography enquiry")}`

export const hero: Photo = {
  id: "hero",
  src: picsum("jie-hero", 2400, 1500),
  alt: "Placeholder — a wide landscape photograph opening the site",
  width: 2400,
  height: 1500,
  title: "Morning, east coast",
  place: "Hualien",
  year: "2025",
  placeholder: true,
}

export const portrait: Photo = {
  id: "about-portrait",
  src: picsum("jie-portrait", 1000, 1250),
  alt: "Placeholder — a portrait of J傑",
  width: 1000,
  height: 1250,
  placeholder: true,
}

// Ordered for the grid: the layout alternates wide and tall frames, so keep
// the orientations roughly as they are when you swap in your own work.
export const work: Photo[] = [
  {
    id: "work-01",
    src: picsum("jie-work-01", 1600, 1067),
    alt: "Placeholder — work sample 1",
    width: 1600,
    height: 1067,
    title: "Harbour at dawn",
    place: "Keelung",
    year: "2025",
    placeholder: true,
  },
  {
    id: "work-02",
    src: picsum("jie-work-02", 1067, 1600),
    alt: "Placeholder — work sample 2",
    width: 1067,
    height: 1600,
    title: "Mei, in the studio",
    place: "Taipei",
    year: "2025",
    placeholder: true,
  },
  {
    id: "work-03",
    src: picsum("jie-work-03", 1067, 1600),
    alt: "Placeholder — work sample 3",
    width: 1067,
    height: 1600,
    title: "Vows",
    place: "Yangmingshan",
    year: "2024",
    placeholder: true,
  },
  {
    id: "work-04",
    src: picsum("jie-work-04", 1600, 1067),
    alt: "Placeholder — work sample 4",
    width: 1600,
    height: 1067,
    title: "Tea fields after rain",
    place: "Alishan",
    year: "2024",
    placeholder: true,
  },
  {
    id: "work-05",
    src: picsum("jie-work-05", 1600, 1067),
    alt: "Placeholder — work sample 5",
    width: 1600,
    height: 1067,
    title: "Night market, closing",
    place: "Tainan",
    year: "2024",
    placeholder: true,
  },
  {
    id: "work-06",
    src: picsum("jie-work-06", 1067, 1600),
    alt: "Placeholder — work sample 6",
    width: 1067,
    height: 1600,
    title: "Grandmother’s hands",
    place: "Lukang",
    year: "2023",
    placeholder: true,
  },
  {
    id: "work-07",
    src: picsum("jie-work-07", 1067, 1600),
    alt: "Placeholder — work sample 7",
    width: 1067,
    height: 1600,
    title: "First dance",
    place: "Taichung",
    year: "2023",
    placeholder: true,
  },
  {
    id: "work-08",
    src: picsum("jie-work-08", 1600, 1067),
    alt: "Placeholder — work sample 8",
    width: 1600,
    height: 1067,
    title: "Low tide",
    place: "Penghu",
    year: "2023",
    placeholder: true,
  },
]

export const subjects = [
  {
    title: "Portraits",
    body: "Individuals, couples and families. Unhurried sessions, at home, in the studio or somewhere that matters to you.",
  },
  {
    title: "Weddings & elopements",
    body: "Small ceremonies and the days around them, documented as they happen rather than staged.",
  },
  {
    title: "Editorial & places",
    body: "Stories for magazines, brands and hotels — people at work, rooms, landscapes, and the light between them.",
  },
]

export type Plan = {
  name: string
  price: string
  unit: string
  summary: string
  includes: string[]
}

// Prices are placeholders — set your own before publishing.
export const pricing = {
  currency: "NT$",
  plans: [
    {
      name: "Portrait",
      price: "8,000",
      unit: "per session",
      summary: "For individuals, couples and families.",
      includes: [
        "Up to 2 hours, one location",
        "40 edited photographs",
        "Private online gallery",
        "Delivered within 2 weeks",
      ],
    },
    {
      name: "Wedding",
      price: "48,000",
      unit: "from, per day",
      summary: "For ceremonies, elopements and the days around them.",
      includes: [
        "Up to 8 hours of coverage",
        "400+ edited photographs",
        "Planning call and timeline",
        "Delivered within 6 weeks",
      ],
    },
    {
      name: "Editorial",
      price: "18,000",
      unit: "from, per half day",
      summary: "For publications, brands and hospitality.",
      includes: [
        "Pre-production and shot list",
        "Usage licence agreed per project",
        "Retouching on selected frames",
        "Turnaround to your deadline",
      ],
    },
  ] satisfies Plan[],
  notes: [
    "Travel outside Taipei is quoted separately.",
    "Prints and albums are available on request.",
    "A 30% deposit holds your date.",
  ],
}
