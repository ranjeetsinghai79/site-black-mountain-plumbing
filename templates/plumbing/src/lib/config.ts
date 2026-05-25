import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Black Mountain Plumbing",
    tagline: "Expert Plumbing. Always On Time.",
    phone: "(858) 536-4161",
    phoneHref: "tel:+18585364161",
    email: "info@blackmountainplumbing.com",
    address: "123 Main St, San Diego, CA 92126",
    city: "San Diego",
    serviceAreas: ["San Diego", "Scripps Ranch"],
    license: "CA C36-XXXXXX",
    since: "1991",
    google_rating: "4.9",
    review_count: "4000+",
    emergency: true,
    theme: "ocean",
    niche: "plumbing",
  },

  services: [
    { icon: "clock", title: "24 Hour Emergency Service", desc: "We're here for you around the clock, ready to tackle any plumbing emergency, day or night.", urgent: true },
    { icon: "droplets", title: "Drain Cleaning & Repair", desc: "From stubborn clogs to slow drains, our experts provide thorough cleaning and lasting repairs for all your drain issues.", urgent: false },
    { icon: "wrench", title: "Sewer Line Services", desc: "Comprehensive sewer line repair, replacement, and maintenance to keep your system flowing smoothly and prevent costly backups.", urgent: false },
    { icon: "home", title: "Pipe Repair & Installation", desc: "Expert solutions for leaking, burst, or corroded pipes, ensuring durable repairs and professional new installations.", urgent: false },
    { icon: "thermometer", title: "Water Heater Services", desc: "Installation, repair, and maintenance for all types of water heaters, ensuring you always have reliable hot water.", urgent: false },
    { icon: "zap", title: "Leak Detection & Repair", desc: "Advanced technology to quickly locate and repair hidden leaks, preventing water damage and saving you money.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "San Diego", stars: 5, text: "Black Mountain Plumbing saved us! Our water heater burst on a Saturday night. Their technician arrived within an hour, was incredibly professional, and had it replaced by midnight. The price was fair, and the service was exceptional. Highly recommend their emergency service!" },
    { name: "David L.", location: "Scripps Ranch", stars: 5, text: "Had a persistent kitchen drain clog that other plumbers couldn't fix. Black Mountain Plumbing used a camera to find the root cause and cleared it completely. They were transparent about pricing and very tidy. Finally, no more standing water!" },
    { name: "Emily R.", location: "San Diego", stars: 5, text: "We needed a new toilet installed and some leaky pipes fixed. The plumber was courteous, efficient, and explained everything clearly. The work was done perfectly, and our bathroom looks great. We'll definitely call them again for any future plumbing needs." }
  ],

  trustBadges: [
    "Licensed & Insured", "33+ Years Experience", "4000+ Reviews", "24/7 Emergency Service", "Repair Warranty", "NATE Certified"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 4000, label: "Happy Customers", suffix: "+", decimals: 0 },
    { value: 33, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your urgent needs with rapid dispatch for all plumbing emergencies." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! We provide clear, detailed quotes before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our plumbers are highly trained, licensed, and continuously updated on the latest techniques." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our intelligent system ensures you can always reach us, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the right tools and parts for efficient repairs." }
  ],

  formServiceOptions: ["24 Hour Emergency Service", "Drain Cleaning & Repair", "Sewer Line Services", "Pipe Repair & Installation", "Water Heater Services", "Leak Detection & Repair"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!