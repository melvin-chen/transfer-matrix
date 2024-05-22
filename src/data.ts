import { Bank, Airline, Alliance, AirlineId } from "./types";

export const transferrableData: Airline[] = [
  {
    id: AirlineId.Aegean,
    name: "Aegean",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇬🇷",
  },
  {
    id: AirlineId.AirCanada,
    name: "Air Canada",
    alliance: Alliance.StarAlliance,
    alsoBookable: [
      AirlineId.CathayPacific,
      AirlineId.AerLingus,
      AirlineId.Emirates,
      AirlineId.Etihad,
      AirlineId.VirginAustralia,
      AirlineId.Gol,
    ],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.CapitalOne,
      Bank.Bilt,
    ],
    flag: "🇨🇦",
  },
  {
    id: AirlineId.AirNewZealand,
    name: "Air New Zealand",
    alliance: Alliance.StarAlliance,
    alsoBookable: [AirlineId.VirginAtlantic],
    transferrableFrom: [],
    flag: "🇳🇿",
  },
  {
    id: AirlineId.Ana,
    name: "ANA",
    alliance: Alliance.StarAlliance,
    alsoBookable: [AirlineId.VirginAtlantic],
    transferrableFrom: [Bank.AmericanExpress],
    flag: "🇯🇵",
  },
  {
    id: AirlineId.Asiana,
    name: "Asiana Airlines",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇰🇷",
  },
  {
    id: AirlineId.Avianca,
    name: "Avianca",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [
      Bank.AmericanExpress,
      Bank.Citi,
      Bank.CapitalOne,
      Bank.Bilt,
      Bank.WellsFargo,
    ],
    flag: "🇨🇴",
  },
  {
    id: AirlineId.Copa,
    name: "Copa Airlines",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇵🇦",
  },
  {
    id: AirlineId.EvaAir,
    name: "EVA Air",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [Bank.Citi, { bank: Bank.CapitalOne, rate: "2:1.5" }],
    flag: "🇹🇼",
  },
  {
    id: AirlineId.SingaporeAirlines,
    name: "Singapore Airlines",
    alliance: Alliance.StarAlliance,
    alsoBookable: [AirlineId.Alaska],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.Citi,
      Bank.CapitalOne,
    ],
    flag: "🇸🇬",
  },
  {
    id: AirlineId.TapPortugal,
    name: "TAP Portugal",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [Bank.CapitalOne],
    flag: "🇵🇹",
  },
  {
    id: AirlineId.Thai,
    name: "Thai",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [Bank.Citi],
    flag: "🇹🇭",
  },
  {
    id: AirlineId.TurkishAirlines,
    name: "Turkish Airlines",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [Bank.Citi, Bank.CapitalOne],
    flag: "🇹🇷",
  },
  {
    id: AirlineId.United,
    name: "United Airlines",
    alliance: Alliance.StarAlliance,
    alsoBookable: [
      AirlineId.AerLingus,
      AirlineId.Emirates,
      AirlineId.Hawaiian,
      AirlineId.VirginAustralia,
    ],
    transferrableFrom: [Bank.Chase, Bank.Bilt],
    flag: "🇺🇸",
  },

  {
    id: AirlineId.AeroMexico,
    name: "AeroMexico",
    alliance: Alliance.Skyteam,
    alsoBookable: [AirlineId.Gol, AirlineId.ElAl],
    transferrableFrom: [
      { bank: Bank.AmericanExpress, rate: "1:1.6" },
      Bank.Citi,
      Bank.CapitalOne,
    ],
    flag: "🇲🇽",
  },
  {
    id: AirlineId.Delta,
    name: "Delta",
    alliance: Alliance.Skyteam,
    alsoBookable: [
      AirlineId.ItaAirways,
      AirlineId.Hawaiian,
      AirlineId.Latam,
      AirlineId.ElAl,
    ],
    transferrableFrom: [Bank.AmericanExpress],
    flag: "🇺🇸",
  },
  {
    id: AirlineId.AirFrance,
    name: "Air France",
    alliance: Alliance.Skyteam,
    alsoBookable: [
      AirlineId.ItaAirways,
      AirlineId.Copa,
      AirlineId.Etihad,
      AirlineId.Gol,
      AirlineId.JapanAirlines,
      AirlineId.WestJet,
    ],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.Citi,
      Bank.CapitalOne,
      Bank.Bilt,
      Bank.WellsFargo,
    ],
    flag: "🇫🇷",
  },
  {
    id: AirlineId.KLM,
    name: "KLM",
    alliance: Alliance.Skyteam,
    alsoBookable: [
      AirlineId.ItaAirways,
      AirlineId.Copa,
      AirlineId.Etihad,
      AirlineId.Gol,
      AirlineId.JapanAirlines,
      AirlineId.WestJet,
    ],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.Citi,
      Bank.CapitalOne,
      Bank.Bilt,
      Bank.WellsFargo,
    ],
    flag: "🇳🇱",
  },
  {
    id: AirlineId.KoreanAir,
    name: "Korean Air",
    alliance: Alliance.Skyteam,
    alsoBookable: [AirlineId.Alaska],
    transferrableFrom: [],
    flag: "🇰🇷",
  },
  {
    id: AirlineId.VirginAtlantic,
    name: "Virgin Atlantic",
    alliance: Alliance.Skyteam,
    alsoBookable: [
      AirlineId.ItaAirways,
      AirlineId.Hawaiian,
      AirlineId.Latam,
      AirlineId.Ana,
      AirlineId.AirNewZealand,
      AirlineId.SouthAfrican,
      AirlineId.SingaporeAirlines,
      AirlineId.VirginAustralia,
    ],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.Citi,
      Bank.CapitalOne,
      Bank.Bilt,
    ],
    flag: "🇬🇧",
  },

  {
    id: AirlineId.AmericanAirlines,
    name: "American Airlines",
    alliance: Alliance.OneWorld,
    alsoBookable: [AirlineId.Etihad, AirlineId.Gol, AirlineId.Hawaiian],
    transferrableFrom: [Bank.Bilt],
    flag: "🇺🇸",
  },
  {
    id: AirlineId.Alaska,
    name: "Alaska",
    alliance: Alliance.OneWorld,
    alsoBookable: [
      AirlineId.Condor,
      AirlineId.AerLingus,
      AirlineId.HainanAirlines,
      AirlineId.KoreanAir,
      AirlineId.Latam,
      AirlineId.ElAl,
      AirlineId.SingaporeAirlines,
      AirlineId.Starlux,
    ],
    transferrableFrom: [Bank.Bilt],
    flag: "🇺🇸",
  },
  {
    id: AirlineId.CathayPacific,
    name: "Cathay Pacific",
    alliance: Alliance.OneWorld,
    alsoBookable: [AirlineId.Latam],
    transferrableFrom: [
      Bank.AmericanExpress,
      Bank.Citi,
      Bank.CapitalOne,
      Bank.Bilt,
    ],
    flag: "🇭🇰",
  },
  {
    id: AirlineId.Finnair,
    name: "Finnair",
    alliance: Alliance.OneWorld,
    alsoBookable: [],
    transferrableFrom: [Bank.CapitalOne],
    flag: "🇫🇮",
  },
  {
    id: AirlineId.JapanAirlines,
    name: "Japan Airlines",
    alliance: Alliance.OneWorld,
    alsoBookable: [AirlineId.AirFrance],
    transferrableFrom: [],
    flag: "🇯🇵",
  },
  {
    id: AirlineId.Qantas,
    name: "Qantas",
    alliance: Alliance.OneWorld,
    alsoBookable: [AirlineId.Emirates, AirlineId.Latam, AirlineId.ElAl],
    transferrableFrom: [Bank.AmericanExpress, Bank.Citi, Bank.CapitalOne],
    flag: "🇦🇺",
  },
  {
    id: AirlineId.Qatar,
    name: "Qatar",
    alliance: Alliance.OneWorld,
    alsoBookable: [AirlineId.JetBlue, AirlineId.ElAl],
    transferrableFrom: [Bank.AmericanExpress, Bank.Citi],
    flag: "🇶🇦",
  },
  {
    id: AirlineId.BritishAirways,
    name: "British Airways",
    alliance: Alliance.OneWorld,
    alsoBookable: [AirlineId.Latam, AirlineId.ElAl],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.CapitalOne,
      Bank.Bilt,
      Bank.WellsFargo,
    ],
    flag: "🇬🇧",
  },
  {
    id: AirlineId.Iberia,
    name: "Iberia",
    alliance: Alliance.OneWorld,
    alsoBookable: [AirlineId.Latam, AirlineId.ElAl],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.Bilt,
      Bank.WellsFargo,
    ],
    flag: "🇪🇸",
  },

  {
    id: AirlineId.AerLingus,
    name: "Aer Lingus",
    alliance: Alliance.NonAlliance,
    alsoBookable: [
      AirlineId.AirCanada,
      AirlineId.AmericanAirlines,
      AirlineId.Alaska,
      AirlineId.BritishAirways,
      AirlineId.Etihad,
      AirlineId.JetBlue,
      AirlineId.Iberia,
      AirlineId.United,
    ],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.Bilt,
      Bank.WellsFargo,
    ],
    flag: "🇮🇪",
  },
  {
    id: AirlineId.Emirates,
    name: "Emirates",
    alliance: Alliance.NonAlliance,
    alsoBookable: [AirlineId.United, AirlineId.JapanAirlines],
    transferrableFrom: [
      Bank.Chase,
      Bank.AmericanExpress,
      Bank.Citi,
      Bank.CapitalOne,
      Bank.Bilt,
    ],
    flag: "🇦🇪",
  },
  {
    id: AirlineId.Etihad,
    name: "Etihad",
    alliance: Alliance.NonAlliance,
    alsoBookable: [
      AirlineId.AmericanAirlines,
      AirlineId.AirCanada,
      AirlineId.Asiana,
    ],
    transferrableFrom: [Bank.AmericanExpress, Bank.Citi, Bank.CapitalOne],
    flag: "🇦🇪",
  },
  {
    id: AirlineId.Hawaiian,
    name: "Hawaiian Airlines",
    alliance: Alliance.NonAlliance,
    alsoBookable: [
      AirlineId.AmericanAirlines,
      AirlineId.JetBlue,
      AirlineId.Delta,
      AirlineId.United,
    ],
    transferrableFrom: [Bank.AmericanExpress, Bank.Bilt],
    flag: "🇺🇸",
  },
  {
    id: AirlineId.JetBlue,
    name: "JetBlue",
    alliance: Alliance.NonAlliance,
    alsoBookable: [AirlineId.Hawaiian, AirlineId.AerLingus],
    transferrableFrom: [
      Bank.Chase,
      { bank: Bank.AmericanExpress, rate: "5:4" },
      Bank.Citi,
    ],
    flag: "🇺🇸",
  },
  {
    id: AirlineId.Latam,
    name: "LATAM",
    alliance: Alliance.NonAlliance,
    alsoBookable: [AirlineId.Delta],
    transferrableFrom: [],
    flag: "🇨🇱",
  },
  {
    id: AirlineId.Southwest,
    name: "Southwest",
    alliance: Alliance.NonAlliance,
    alsoBookable: [],
    transferrableFrom: [Bank.Chase],
    flag: "🇺🇸",
  },
  {
    id: AirlineId.VirginAustralia,
    name: "Virgin Australia",
    alliance: Alliance.NonAlliance,
    alsoBookable: [
      AirlineId.AirCanada,
      AirlineId.Etihad,
      AirlineId.Hawaiian,
      AirlineId.Ana,
      AirlineId.Qatar,
      AirlineId.SingaporeAirlines,
      AirlineId.VirginAtlantic,
      AirlineId.United,
    ],
    transferrableFrom: [],
    flag: "🇦🇺",
  },

  // Other members

  {
    id: AirlineId.AirChina,
    name: "Air China",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇨🇳",
  },
  {
    id: AirlineId.AirIndia,
    name: "Air India",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇮🇳",
  },
  {
    id: AirlineId.Austrian,
    name: "Austrian",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇦🇹",
  },
  {
    id: AirlineId.BrusselsAirlines,
    name: "Brussels Airlines",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇧🇪",
  },
  {
    id: AirlineId.CroatiaAirlines,
    name: "Croatia Airlines",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇭🇷",
  },
  {
    id: AirlineId.Egyptair,
    name: "Egyptair",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇪🇬",
  },
  {
    id: AirlineId.Ethiopian,
    name: "Ethiopian",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇪🇹",
  },
  {
    id: AirlineId.LOTPolish,
    name: "LOT Polish",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇵🇱",
  },
  {
    id: AirlineId.Lufthansa,
    name: "Lufthansa",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇩🇪",
  },
  {
    id: AirlineId.Sas,
    name: "SAS",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇩🇰🇳🇴🇸🇪",
  },
  {
    id: AirlineId.ShenzhenAirlines,
    name: "Shenzhen Airlines",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇨🇳",
  },
  {
    id: AirlineId.SouthAfrican,
    name: "South African",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇿🇦",
  },
  {
    id: AirlineId.Swiss,
    name: "Swiss",
    alliance: Alliance.StarAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇨🇭",
  },

  {
    id: AirlineId.AerolineasArgentinas,
    name: "Aerolineas Argentinas",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇦🇷",
  },
  {
    id: AirlineId.AirEuropa,
    name: "Air Europa",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇪🇸",
  },
  {
    id: AirlineId.ChinaAirlines,
    name: "China Airlines",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇹🇼",
  },
  {
    id: AirlineId.ChinaEastern,
    name: "China Eastern",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇨🇳",
  },
  {
    id: AirlineId.CzechAirlines,
    name: "Czech Airlines",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇨🇿",
  },
  {
    id: AirlineId.GarudaIndonesia,
    name: "Garuda Indonesia",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇮🇩",
  },
  {
    id: AirlineId.ItaAirways,
    name: "ITA Airways",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇮🇹",
  },
  {
    id: AirlineId.KenyaAirways,
    name: "Kenya Airways",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇰🇪",
  },
  {
    id: AirlineId.MiddleEast,
    name: "Middle East Airlines",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "",
  },
  {
    id: AirlineId.Tarom,
    name: "TAROM",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇷🇴",
  },
  {
    id: AirlineId.VietnamAirlines,
    name: "Vietnam Airlines",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇻🇳",
  },
  {
    id: AirlineId.XiamenAir,
    name: "Xiamen Air",
    alliance: Alliance.Skyteam,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇨🇳",
  },

  {
    id: AirlineId.MalaysiaAirlines,
    name: "Malaysian Airlines",
    alliance: Alliance.OneWorld,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇲🇾",
  },
  {
    id: AirlineId.RoyalAirMaroc,
    name: "Royal Air Maroc",
    alliance: Alliance.OneWorld,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇲🇦",
  },
  {
    id: AirlineId.RoyalJordanian,
    name: "Royal Jordanian",
    alliance: Alliance.OneWorld,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇯🇴",
  },
  {
    id: AirlineId.SriLankanAirlines,
    name: "Sri Lankan Airlines",
    alliance: Alliance.OneWorld,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇱🇰",
  },

  {
    id: AirlineId.Condor,
    name: "Condor",
    alliance: Alliance.NonAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇩🇪",
  },
  {
    id: AirlineId.ElAl,
    name: "El Al",
    alliance: Alliance.NonAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇮🇱",
  },
  {
    id: AirlineId.Gol,
    name: "GOL",
    alliance: Alliance.NonAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇧🇷",
  },
  {
    id: AirlineId.WestJet,
    name: "WestJet",
    alliance: Alliance.NonAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇨🇦",
  },
  {
    id: AirlineId.Starlux,
    name: "Starlux",
    alliance: Alliance.NonAlliance,
    alsoBookable: [],
    transferrableFrom: [],
    flag: "🇹🇼",
  },
];

export const banks = Object.keys(Bank) as (keyof typeof Bank)[];

export const BankDisplayNames = {
  [Bank.Chase]: "Chase",
  [Bank.AmericanExpress]: "AmEx",
  [Bank.Citi]: "Citi",
  [Bank.CapitalOne]: "Capital One",
  [Bank.Bilt]: "Bilt",
  [Bank.WellsFargo]: "Wells Fargo",
};

export const alliances = Object.keys(Alliance) as (keyof typeof Alliance)[];

export const AllianceDisplayNames = {
  StarAlliance: "Star Alliance",
  Skyteam: "SkyTeam",
  OneWorld: "Oneworld",
  NonAlliance: "Non-Alliance",
};
