export const homeData = {
  hero: {
    typingPhrases: [
      "Best Car Rental in Bangladesh",
      "City to City Ride Sharing",
      "Airport Pick & Drop Service",
      "0% Commission, 100% Freedom"
    ],
    subtitle:
      "Choose your city, pick your car and enjoy the journey with Garibook’s best drivers.",
    ctaText: "Download App",
    ctaLink: "#download-app"
  },

  booking: {
    cars: [
      {
        id: "sedan",
        name: "Sedan (Premio / Allion / Axio)",
        category: "Sedan",
        seats: 4,
        luggage: "2 Bags",
        description: "Comfortable AC sedan for city & intercity travel"
      },
      {
        id: "microbus",
        name: "Microbus (Noah / Voxy / Esquire)",
        category: "Microbus",
        seats: 7,
        luggage: "4 Bags",
        description: "Spacious multi-seater for family & group travel"
      },
      {
        id: "hiace",
        name: "Hiace (Grand Cabin / GL)",
        category: "Van",
        seats: 11,
        luggage: "6 Bags",
        description: "High capacity van for long group tours"
      },
      {
        id: "suv",
        name: "SUV / Prado (Harrier / Fortuner)",
        category: "Luxury SUV",
        seats: 5,
        luggage: "3 Bags",
        description: "Premium executive ride with high road clearance"
      }
    ],

    popularLocations: [
      "Dhaka - Gulshan 1 & 2",
      "Dhaka - Banani",
      "Dhaka - Dhanmondi",
      "Dhaka - Uttara",
      "Dhaka - Mirpur",
      "Dhaka - Motijheel",
      "Chittagong - GEC Circle",
      "Chittagong - Agrabad",
      "Sylhet - Zindabazar",
      "Cox's Bazar - Kolatoli Beach",
      "Rajshahi - Shaheb Bazar",
      "Bogura - Satmatha",
      "Khulna - Shibbari",
      "Barisal - Sadar Road",
      "Cumilla - Kandirpar",
      "Gazipur - Chowrasta"
    ],

    airports: [
      {
        code: "DAC",
        name: "Hazrat Shahjalal International Airport, Dhaka",
        terminal: "Terminal 1 & 2"
      },
      {
        code: "CGP",
        name: "Shah Amanat International Airport, Chittagong",
        terminal: "Main Terminal"
      },
      {
        code: "ZYL",
        name: "Osmani International Airport, Sylhet",
        terminal: "Main Terminal"
      },
      {
        code: "CXB",
        name: "Cox's Bazar Domestic Airport",
        terminal: "Domestic Terminal"
      }
    ]
  },

  statistics: [
    {
      targetNumber: 100000,
      suffix: "+",
      label: "Trip Requests",
      display: "100K+"
    },
    {
      targetNumber: 50000,
      suffix: "+",
      label: "Total Customers",
      display: "50K+"
    },
    {
      targetNumber: 10000,
      suffix: "+",
      label: "Active Drivers",
      display: "10K+"
    },
    {
      targetNumber: 64,
      suffix: "",
      label: "Districts Covered",
      display: "64"
    }
  ],

  services: {
    heading: "Our Services",
    tabs: [
      { id: "rides", label: "Rides" },
      { id: "business", label: "Garibook Business" },
      { id: "club", label: "Garibook Club" },
      { id: "vms", label: "VMS" }
    ],
    ridesCards: [
      {
        id: "intercity",
        title: "Intercity Car Rental",
        description: "Travel between cities with comfort and confidence.",
        icon: "/assets/cars/intercity_car_rental.svg",
        badge: "Popular"
      },
      {
        id: "rideshare",
        title: "Ride share",
        description: "Go anywhere in the city, quickly and easily.",
        icon: "/assets/cars/rideshare.svg",
        badge: "Fast"
      },
      {
        id: "airport",
        title: "Airport Rental",
        description:
          "Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
        icon: "/assets/cars/airport_rental.svg",
        badge: "24/7"
      },
      {
        id: "hourly",
        title: "Hourly Rental",
        description: "Rent a car by the hour, tailored to your needs.",
        icon: "/assets/cars/hourly_rental.svg",
        badge: "Flexible"
      }
    ],
    business: {
      title: "Modern Car Rentals for Business",
      description:
        "Simplify your corporate transportation, ensure on-time team mobility, and gain control with our dedicated corporate dashboard.",
      image: "/assets/images/business_fleet.jpg",
      link: "#business",
      points: [
        "Consolidated monthly invoicing",
        "Dedicated account manager",
        "Zero hidden fees & live tracking"
      ]
    },
    club: {
      title: "Turn Your Car into Earnings with Garibook Club",
      description:
        "Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and making money doing what they love.",
      image: "/assets/images/club_community.jpg",
      link: "#club",
      points: [
        "Earn up to ৳80,000+ per month",
        "Vehicle maintenance discounts",
        "Exclusive community networking"
      ]
    },
    vms: {
      title: "Vehicle Management System - VMS",
      description:
        "Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your fleet with real-time GPS tracking and fuel diagnostics.",
      image: "/assets/images/vms_dashboard.jpg",
      link: "#vms",
      points: [
        "Real-time GPS & route playback",
        "Automated fuel & service alerts",
        "Driver behavior & safety scoring"
      ]
    }
  },

  freedom: {
    heading: "Freedom in Every Journey",
    bannerImage: "/assets/images/freedom_banner.jpg",
    pillars: [
      {
        icon: "/assets/icons/car.svg",
        title: "Choose the Car",
        description: "Pick what suits your comfort and group size."
      },
      {
        icon: "/assets/icons/driver.svg",
        title: "Choose the Driver",
        description: "Based on verified ratings, reviews, and completed trips."
      },
      {
        icon: "/assets/icons/fare.svg",
        title: "Choose the Fare",
        description: "Select the driver bid that perfectly fits your budget."
      }
    ]
  },

  travelScenarios: {
    heading: "More Than Miles — We Bring People Together",
    cards: [
      {
        title: "Airport Rentals",
        tagline: "Stress-free airport pickups & drop-offs across Bangladesh",
        image: "/assets/images/travel_airport.jpg"
      },
      {
        title: "Family Trips",
        tagline: "Spacious and comfortable rides for your loved ones",
        image: "/assets/images/travel_family.jpg"
      },
      {
        title: "Long Tours",
        tagline: "Discover scenic Bangladesh from tea gardens to beaches",
        image: "/assets/images/travel_tour.jpg"
      }
    ]
  },

  bookingArrival: {
    heading: "From Booking to Arrival It’s All in Your Hands",
    ctaText: "Download App",
    items: [
      {
        title: "Explore Freely",
        subtitle: "Over 64 districts connected seamlessly",
        image: "/assets/images/freedom_banner.jpg",
        colSpan: "col-lg-8"
      },
      {
        title: "Total Freedom",
        subtitle: "Direct bidding with verified drivers",
        image: "/assets/images/travel_tour.jpg",
        colSpan: "col-lg-4"
      },
      {
        title: "Safe & Insured Travel",
        subtitle: "Trip insurance on every ride",
        image: "/assets/images/travel_family.jpg",
        colSpan: "col-lg-4"
      },
      {
        title: "Your Preferred Car",
        subtitle: "Wide fleet from Sedan to Luxury SUV",
        image: "/assets/images/business_fleet.jpg",
        colSpan: "col-lg-4"
      },
      {
        title: "Smooth Journey",
        subtitle: "Guaranteed comfort and punctuality",
        image: "/assets/images/travel_airport.jpg",
        colSpan: "col-lg-4"
      }
    ]
  },

  smartDriver: {
    heading: "Be a Smart Driver",
    title: "0% Commission\n100% Freedom",
    description:
      "Keep every single Taka you earn. No middlemen, no commission deductions, and direct passenger bids.",
    appMockup: "/assets/images/driver_app_screen.jpg",
    ctaText: "Download Smart Driver App",
    ctaLink: "#driver-app"
  },

  newsPlatforms: [
    {
      name: "The Daily Star",
      logo: "The Daily Star",
      headline: "Garibook disrupts intercity travel with zero commission model"
    },
    {
      name: "Prothom Alo",
      logo: "প্রথম আলো",
      headline: "দেশজুড়ে সহজ ইন্টারসিটি কার রেন্টাল সেবা দিচ্ছে গাড়িবুক"
    },
    {
      name: "Dhaka Tribune",
      logo: "Dhaka Tribune",
      headline: "Digital app Garibook revolutionizes long-distance rides"
    },
    {
      name: "The Business Standard",
      logo: "The Business Standard",
      headline: "How Garibook became Bangladesh's leading car rental network"
    }
  ],

  testimonials: [
    {
      name: "Tanvir Ahmed",
      route: "Dhaka to Cox's Bazar",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      quote:
        "Booking was super easy! The driver was on time, courteous, and drove very safely. Highly recommended for long family vacations."
    },
    {
      name: "Nusrat Jahan",
      route: "Airport to Gulshan 2",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      quote:
        "Landed at 2 AM from Dubai and my Garibook driver was waiting at the arrival gate with a nameboard. Zero hassle, pristine car."
    },
    {
      name: "Rafiqul Islam",
      route: "Dhaka to Sylhet",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      quote:
        "The bidding feature is genius! I received 4 driver offers within 2 minutes and chose the one with the best rating and fare."
    },
    {
      name: "Sadia Rahman",
      route: "Dhaka to Chittagong",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      quote:
        "Garibook has completely solved intercity car rentals. Transparent pricing, no sudden cancellation, and outstanding comfort."
    }
  ],

  blogs: [
    {
      title: "Top 7 Scenic Spots in Bangladesh You Can Reach by Car",
      category: "Road Trips",
      date: "September 15, 2026",
      readTime: "5 min read",
      excerpt:
        "From the rolling hills of Sajek Valley to the calm tea plantations of Sreemangal, here are the top driving routes.",
      image: "/assets/images/travel_tour.jpg"
    },
    {
      title: "The Ultimate Guide to Hassle-Free Airport Transfers",
      category: "Travel Hacks",
      date: "September 08, 2026",
      readTime: "4 min read",
      excerpt:
        "How to avoid airport surge pricing, select the right luggage capacity, and coordinate terminal pickups smoothly.",
      image: "/assets/images/travel_airport.jpg"
    },
    {
      title: "Why Corporate Fleets Are Switching to Smart VMS",
      category: "Business Mobility",
      date: "August 28, 2026",
      readTime: "6 min read",
      excerpt:
        "How automated route optimization and live telemetry cut corporate fleet operational costs by up to 28%.",
      image: "/assets/images/vms_dashboard.jpg"
    }
  ],

  appDownload: {
    title: "Download \nGaribook Mobile App",
    subtitle: "Download our Customer, Smart Driver and Enterprise App",
    ctaText: "Download App",
    platforms: [
      { name: "Google Play", badge: "Android" },
      { name: "App Store", badge: "iOS" }
    ]
  },

  footer: {
    columns: [
      {
        title: "garibook",
        links: [
          { label: "About Us", href: "#about" },
          { label: "Customer Reviews", href: "#reviews" },
          { label: "Career", href: "#career" },
          { label: "Newsroom", href: "#news" },
          { label: "Garibook Map", href: "#map" }
        ]
      },
      {
        title: "Services",
        links: [
          { label: "Intercity Rental", href: "#services" },
          { label: "Airport Pick and Drop", href: "#services" },
          { label: "Hourly Rental", href: "#services" },
          { label: "Vehicle Management System (VMS)", href: "#vms" }
        ]
      },
      {
        title: "Become Our Partner",
        links: [
          { label: "Become a Smart Driver", href: "#driver" },
          { label: "Become a member of Garibook Club", href: "#club" },
          { label: "Garibook Business for Corporate Travel", href: "#business" }
        ]
      },
      {
        title: "Contacts",
        links: [
          { label: "support@garibook.com", href: "mailto:support@garibook.com" },
          {
            label:
              "Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212",
            href: "#"
          },
          { label: "+88 09 678 11 22 33", href: "tel:09678112233" }
        ]
      }
    ],
    nrb: {
      name: "NRB Solution Ltd.",
      logo: "/assets/images/nrb_logo.svg",
      website: "https://nrb-solutions.net/"
    },
    link3: {
      name: "Link 3 Technologies Ltd.",
      logo: "/assets/images/link3_logo.svg",
      website: "https://link3.net/"
    },
    tradeLicense: "TRAD/DNCC/013806/2024",
    copyright: "© 2026 Garibook.com. All Rights Reserved."
  }
};
