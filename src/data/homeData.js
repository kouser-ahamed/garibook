export const homeData = {
  hero: {
    typingPhrases: [
      "Assurance of Effortless Travel",
      "Luxury Trips with Comfort",
      "Your Journey Starts Here..."
    ],
    subtitle:
      "Choose your city, pick your car and enjoy the journey with Garibook's best drivers.",
    ctaText: "Download App",
    ctaLink: "#download-app"
  },

  booking: {
    cars: [
      {
        id: "sedan-premium",
        name: "Sedan Premium",
        seats: 4,
        luggage: "2 Bags",
        description: "Premium executive sedan with extra legroom & comfort",
        icon: "/assets/cars/sedan_premium.svg",
        badge: "Luxury"
      },
      {
        id: "sedan",
        name: "Sedan",
        seats: 4,
        luggage: "2 Bags",
        description: "Comfortable standard AC sedan for city & highway",
        icon: "/assets/cars/sedan.svg",
        badge: "Economy"
      },
      {
        id: "noah",
        name: "Noah",
        seats: 7,
        luggage: "4 Bags",
        description: "Spacious multi-seater microbus for family & group travel",
        icon: "/assets/cars/noah.svg",
        badge: "Family"
      },
      {
        id: "hiace",
        name: "HiAce",
        seats: 11,
        luggage: "6 Bags",
        description: "High-capacity passenger van for group tours & events",
        icon: "/assets/cars/hiace.svg",
        badge: "Large Group"
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
        id: "dac",
        code: "DAC",
        name: "Hazrat Shahjalal International Airport, Dhaka",
        nameEn: "Hazrat Shahjalal International Airport, Dhaka",
        nameBn: "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকা",
        terminal: "Terminal 1 & 2"
      },
      {
        id: "cgp",
        code: "CGP",
        name: "Shah Amanat International Airport, Chattogram",
        nameEn: "Shah Amanat International Airport, Chattogram",
        nameBn: "শাহ আমানত আন্তর্জাতিক বিমানবন্দর, চট্টগ্রাম",
        terminal: "Main Terminal"
      },
      {
        id: "zyl",
        code: "ZYL",
        name: "Osmani International Airport, Sylhet",
        nameEn: "Osmani International Airport, Sylhet",
        nameBn: "ওসমানী আন্তর্জাতিক বিমানবন্দর, সিলেট",
        terminal: "Main Terminal"
      },
      {
        id: "cxb",
        code: "CXB",
        name: "Cox's Bazar Airport, Cox's Bazar",
        nameEn: "Cox's Bazar Airport, Cox's Bazar",
        nameBn: "কক্সবাজার বিমানবন্দর",
        terminal: "Domestic Terminal"
      },
      {
        id: "spd",
        code: "SPD",
        name: "Saidpur Airport, Nilphamari",
        nameEn: "Saidpur Airport, Nilphamari",
        nameBn: "সৈয়দপুর বিমানবন্দর",
        terminal: "Domestic Terminal"
      },
      {
        id: "jsr",
        code: "JSR",
        name: "Jashore Airport, Jashore",
        nameEn: "Jashore Airport, Jashore",
        nameBn: "যশোর বিমানবন্দর",
        terminal: "Domestic Terminal"
      },
      {
        id: "rjh",
        code: "RJH",
        name: "Shah Makhdum Airport, Rajshahi",
        nameEn: "Shah Makhdum Airport, Rajshahi",
        nameBn: "শাহ মখদুম বিমানবন্দর, রাজশাহী",
        terminal: "Domestic Terminal"
      },
      {
        id: "bzr",
        code: "BZR",
        name: "Barishal Airport, Barishal",
        nameEn: "Barishal Airport, Barishal",
        nameBn: "বরিশাল বিমানবন্দর",
        terminal: "Domestic Terminal"
      }
    ]
  },

  statistics: [
    {
      targetNumber: 300000,
      suffix: "+",
      label: "Trip Requests",
      display: "300,000+"
    },
    {
      targetNumber: 850000,
      suffix: "+",
      label: "Total Customers",
      display: "850,000+"
    },
    {
      targetNumber: 35000,
      suffix: "+",
      label: "Active Drivers",
      display: "35,000+"
    },
    {
      targetNumber: 64,
      suffix: "",
      label: "District Covered",
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
      id: 1,
      category: "Road Trips",
      date: "September 15, 2026",
      readTime: "5 min read",
      title: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
      excerpt:
        "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা। নিরাপদ ভ্রমণ, সাশ্রয়ী ভাড়া এবং সহজ অ্যাপ বুকিং সুবিধার পূর্ণাঙ্গ নির্দেশিকা।",
      image: "/assets/blog/1.webp",
      articleUrl: "https://garibook.com/blog/ride-sharing-bangladesh",
    },
    {
      id: 2,
      category: "Sylhet Tour",
      date: "September 20, 2026",
      readTime: "6 min read",
      title: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
      excerpt:
        "জাফলং, বিছনাকান্দি, রাতারগুল ও সাদাপাথর ভ্রমণের সেরা রুট, গাড়ি বুকিং টিপস এবং স্থানীয় খাবার ও হোটেল বুকিংয়ের পূর্ণ তথ্য।",
      image: "/assets/blog/2.webp",
      articleUrl: "https://garibook.com/blog/sylhet-tourist-spots",
    },
    {
      id: 3,
      category: "Heritage Tour",
      date: "September 20, 2026",
      readTime: "4 min read",
      title: "নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
      excerpt:
        "পাহাড়পুর সোমপুর মহাবিহার, কুশুম্বা মসজিদ ও পতিসর রবীন্দ্র স্মৃতি জাদুঘর ঘুরে দেখার সম্পূর্ণ গাইড ও যাতায়াত পরামর্শ।",
      image: "/assets/blog/3.webp",
      articleUrl: "https://garibook.com/blog/naogaon-tourist-spots",
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
