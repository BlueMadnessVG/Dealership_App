import {
  CarCondition,
  ContactPreference,
  CreditTerm,
  PaymentMethod,
} from "@/types/quote.types";

export const CAR_MODELS = [
  {
    id: "pulse",
    value: "pulse",
    label: "Fiat Pulse",
    category: "SUV",
    year: 2025,
    startingPrice: 399000,
    image: "/images/models/pulse.webp",
    tagline: "El SUV compacto que redefine el diseño urbano",
    specs: {
      horsepower: 130,
      fuelEfficiency: "18 km/l",
      acceleration: "9.4s",
      transmission: "Automática CVT",
      drivetrain: "FWD",
    },
  },
  {
    id: "fastback",
    value: "fastback",
    label: "Fiat Fastback",
    category: "SUV Coupé",
    year: 2025,
    startingPrice: 469000,
    image: "/images/models/fastback.webp",
    tagline: "Diseño coupé y potencia que destacan en cada camino",
    specs: {
      horsepower: 175,
      fuelEfficiency: "17 km/l",
      acceleration: "8.3s",
      transmission: "Automática CVT",
      drivetrain: "FWD",
    },
  },
  {
    id: "argo",
    value: "argo",
    label: "Fiat Argo",
    category: "Hatchback",
    year: 2025,
    startingPrice: 319000,
    image: "/images/models/argo.webp",
    tagline: "Compacto, eficiente y perfecto para la ciudad",
    specs: {
      horsepower: 109,
      fuelEfficiency: "19 km/l",
      acceleration: "10.2s",
      transmission: "Manual / Automática",
      drivetrain: "FWD",
    },
  },
  {
    id: "cronos",
    value: "cronos",
    label: "Fiat Cronos",
    category: "Sedán",
    year: 2025,
    startingPrice: 329000,
    image: "/images/models/cronos.webp",
    tagline: "Elegancia y confort en cada trayecto",
    specs: {
      horsepower: 109,
      fuelEfficiency: "18.5 km/l",
      acceleration: "10.5s",
      transmission: "Manual / Automática",
      drivetrain: "FWD",
    },
  },
  {
    id: "toro",
    value: "toro",
    label: "Fiat Toro",
    category: "Pickup",
    year: 2025,
    startingPrice: 479000,
    image: "/images/models/toro.webp",
    tagline: "La pickup que combina potencia, tecnología y estilo",
    specs: {
      horsepower: 185,
      fuelEfficiency: "14 km/l",
      acceleration: "9.8s",
      transmission: "Automática 9 velocidades",
      drivetrain: "AWD",
    },
  },
];

export const CAR_VERSIONS = {
  pulse: [
    { id: "pulse-drive", value: "pulse-drive", label: "Drive", price: 399000 },
    {
      id: "pulse-audace",
      value: "pulse-audace",
      label: "Audace",
      price: 439000,
    },
    {
      id: "pulse-impetus",
      value: "pulse-impetus",
      label: "Impetus",
      price: 479000,
    },
  ],

  fastback: [
    {
      id: "fastback-audace",
      value: "fastback-audace",
      label: "Audace",
      price: 469000,
    },
    {
      id: "fastback-impetus",
      value: "fastback-impetus",
      label: "Impetus",
      price: 509000,
    },
    {
      id: "fastback-abarth",
      value: "fastback-abarth",
      label: "Abarth",
      price: 559000,
    },
  ],

  argo: [
    { id: "argo-drive", value: "argo-drive", label: "Drive", price: 319000 },
    {
      id: "argo-trekking",
      value: "argo-trekking",
      label: "Trekking",
      price: 349000,
    },
    { id: "argo-hgt", value: "argo-hgt", label: "HGT", price: 379000 },
  ],

  cronos: [
    {
      id: "cronos-drive",
      value: "cronos-drive",
      label: "Drive",
      price: 329000,
    },
    {
      id: "cronos-precision",
      value: "cronos-precision",
      label: "Precision",
      price: 369000,
    },
    {
      id: "cronos-stile",
      value: "cronos-stile",
      label: "Stile",
      price: 399000,
    },
  ],

  toro: [
    {
      id: "toro-freedom",
      value: "toro-freedom",
      label: "Freedom",
      price: 479000,
    },
    {
      id: "toro-volcano",
      value: "toro-volcano",
      label: "Volcano",
      price: 529000,
    },
    { id: "toro-ranch", value: "toro-ranch", label: "Ranch", price: 589000 },
  ],
};

export const CAR_CONDITIONS = [
  { id: "new", value: CarCondition.NEW, label: "Nuevo" },
  { id: "used", value: CarCondition.USED, label: "Usado" },
];

export const DISTRIBUTORS = [
  {
    id: "dist-1",
    value: "dist-1",
    label: "Distribuidor Norte",
    state: "Chihuahua",
  },
  {
    id: "dist-2",
    value: "dist-2",
    label: "Distribuidor Centro",
    state: "Ciudad de México",
  },
  {
    id: "dist-3",
    value: "dist-3",
    label: "Distribuidor Sur",
    state: "Guerrero",
  },
  {
    id: "dist-4",
    value: "dist-4",
    label: "Distribuidor Este",
    state: "Veracruz",
  },
  {
    id: "dist-5",
    value: "dist-5",
    label: "Distribuidor Oeste",
    state: "Jalisco",
  },
];

export const CONTACT_PREFERENCES = [
  {
    id: "phone",
    value: ContactPreference.PHONE,
    label: "Llamada telefónica",
    icon: "📞",
  },
  {
    id: "email",
    value: ContactPreference.EMAIL,
    label: "Correo electrónico",
    icon: "✉️",
  },
  { id: "both", value: ContactPreference.BOTH, label: "Ambos", icon: "📱✉️" },
];

export const PAYMENT_METHODS = [
  { id: "cash", value: PaymentMethod.CASH, label: "Contado", icon: "💵" },
  { id: "credit", value: PaymentMethod.CREDIT, label: "Crédito", icon: "💳" },
];

export const CREDIT_TERMS = [
  { id: "12", value: CreditTerm.TERM_12, label: "12 meses" },
  { id: "24", value: CreditTerm.TERM_24, label: "24 meses" },
  { id: "36", value: CreditTerm.TERM_36, label: "36 meses" },
  { id: "48", value: CreditTerm.TERM_48, label: "48 meses" },
  { id: "60", value: CreditTerm.TERM_60, label: "60 meses" },
  { id: "72", value: CreditTerm.TERM_72, label: "72 meses" },
];

export const DOWN_PAYMENT_OPTIONS = [
  { id: "10%", value: 10, label: "10%", type: "percentage" },
  { id: "20%", value: 20, label: "20%", type: "percentage" },
  { id: "30%", value: 30, label: "30%", type: "percentage" },
  { id: "40%", value: 40, label: "40%", type: "percentage" },
  { id: "50%", value: 50, label: "50%", type: "percentage" },
];
