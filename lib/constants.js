'use strict';

const collection = {
  TOP_MAC: 'topmacapps',
  TOP_FREE_MAC: 'topfreemacapps',
  TOP_GROSSING_MAC: 'topgrossingmacapps',
  TOP_PAID_MAC: 'toppaidmacapps',
  NEW_IOS: 'newapplications',
  NEW_FREE_IOS: 'newfreeapplications',
  NEW_PAID_IOS: 'newpaidapplications',
  TOP_FREE_IOS: 'topfreeapplications',
  TOP_FREE_IPAD: 'topfreeipadapplications',
  TOP_GROSSING_IOS: 'topgrossingapplications',
  TOP_GROSSING_IPAD: 'topgrossingipadapplications',
  TOP_PAID_IOS: 'toppaidapplications',
  TOP_PAID_IPAD: 'toppaidipadapplications'
};

const category = {
  BOOKS: 6018,
  BUSINESS: 6000,
  CATALOGS: 6022,
  EDUCATION: 6017,
  ENTERTAINMENT: 6016,
  FINANCE: 6015,
  FOOD_AND_DRINK: 6023,
  GAMES: 6014,
  GAMES_ACTION: 7001,
  GAMES_ADVENTURE: 7002,
  GAMES_ARCADE: 7003,
  GAMES_BOARD: 7004,
  GAMES_CARD: 7005,
  GAMES_CASINO: 7006,
  GAMES_DICE: 7007,
  GAMES_EDUCATIONAL: 7008,
  GAMES_FAMILY: 7009,
  GAMES_MUSIC: 7011,
  GAMES_PUZZLE: 7012,
  GAMES_RACING: 7013,
  GAMES_ROLE_PLAYING: 7014,
  GAMES_SIMULATION: 7015,
  GAMES_SPORTS: 7016,
  GAMES_STRATEGY: 7017,
  GAMES_TRIVIA: 7018,
  GAMES_WORD: 7019,
  HEALTH_AND_FITNESS: 6013,
  LIFESTYLE: 6012,
  MAGAZINES_AND_NEWSPAPERS: 6021,
  MAGAZINES_ARTS: 13007,
  MAGAZINES_AUTOMOTIVE: 13006,
  MAGAZINES_WEDDINGS: 13008,
  MAGAZINES_BUSINESS: 13009,
  MAGAZINES_CHILDREN: 13010,
  MAGAZINES_COMPUTER: 13011,
  MAGAZINES_FOOD: 13012,
  MAGAZINES_CRAFTS: 13013,
  MAGAZINES_ELECTRONICS: 13014,
  MAGAZINES_ENTERTAINMENT: 13015,
  MAGAZINES_FASHION: 13002,
  MAGAZINES_HEALTH: 13017,
  MAGAZINES_HISTORY: 13018,
  MAGAZINES_HOME: 13003,
  MAGAZINES_LITERARY: 13019,
  MAGAZINES_MEN: 13020,
  MAGAZINES_MOVIES_AND_MUSIC: 13021,
  MAGAZINES_POLITICS: 13001,
  MAGAZINES_OUTDOORS: 13004,
  MAGAZINES_FAMILY: 13023,
  MAGAZINES_PETS: 13024,
  MAGAZINES_PROFESSIONAL: 13025,
  MAGAZINES_REGIONAL: 13026,
  MAGAZINES_SCIENCE: 13027,
  MAGAZINES_SPORTS: 13005,
  MAGAZINES_TEENS: 13028,
  MAGAZINES_TRAVEL: 13029,
  MAGAZINES_WOMEN: 13030,
  MEDICAL: 6020,
  MUSIC: 6011,
  NAVIGATION: 6010,
  NEWS: 6009,
  PHOTO_AND_VIDEO: 6008,
  PRODUCTIVITY: 6007,
  REFERENCE: 6006,
  SHOPPING: 6024,
  SOCIAL_NETWORKING: 6005,
  SPORTS: 6004,
  TRAVEL: 6003,
  UTILITIES: 6002,
  WEATHER: 6001
};

const device = {
  IPAD: 'iPadSoftware',
  MAC: 'macSoftware',
  ALL: 'software'
};

const sort = {
  RECENT: 'mostRecent',
  HELPFUL: 'mostHelpful'
};

const platforms = {
  K7: 20,
  P7: 21,
  K71: 23,
  P71: 24,
  K8: 25,
  P8: 26,
  P84: 29,
  K84: 30,
  Android: 31,
  Watch: 35,
  MacPodcasts1: 38
};

// From https://github.com/gonzoua/random-stuff/blob/master/appstorereviews.rb
const markets = {
  AE: 143481,
  AF: 143610,
  AG: 143540,
  AI: 143538,
  AL: 143575,
  AM: 143524,
  AO: 143564,
  AR: 143505,
  AT: 143445,
  AU: 143460,
  AZ: 143568,
  BA: 143612,
  BB: 143541,
  BD: 143490,
  BE: 143446,
  BF: 143578,
  BG: 143526,
  BH: 143559,
  BJ: 143576,
  BM: 143542,
  BN: 143560,
  BO: 143556,
  BR: 143503,
  BS: 143539,
  BT: 143577,
  BW: 143525,
  BY: 143565,
  BZ: 143555,
  CA: 143455,
  CD: 143613,
  CG: 143582,
  CH: 143459,
  CI: 143527,
  CL: 143483,
  CM: 143574,
  CN: 143465,
  CO: 143501,
  CR: 143495,
  CV: 143580,
  CY: 143557,
  CZ: 143489,
  DE: 143443,
  DK: 143458,
  DM: 143545,
  DO: 143508,
  DZ: 143563,
  EC: 143509,
  EE: 143518,
  EG: 143516,
  ES: 143454,
  FI: 143447,
  FJ: 143583,
  FM: 143591,
  FR: 143442,
  GA: 143614,
  GB: 143444,
  GD: 143546,
  GF: 143615,
  GH: 143573,
  GM: 143584,
  GR: 143448,
  GT: 143504,
  GW: 143585,
  GY: 143553,
  HK: 143463,
  HN: 143510,
  HR: 143494,
  HU: 143482,
  ID: 143476,
  IE: 143449,
  IL: 143491,
  IN: 143467,
  IQ: 143617,
  IS: 143558,
  IT: 143450,
  JM: 143511,
  JO: 143528,
  JP: 143462,
  KE: 143529,
  KG: 143586,
  KH: 143579,
  KN: 143548,
  KP: 143466,
  KR: 143466,
  KW: 143493,
  KY: 143544,
  KZ: 143517,
  LA: 143587,
  LB: 143497,
  LC: 143549,
  LI: 143522,
  LK: 143486,
  LR: 143588,
  LT: 143520,
  LU: 143451,
  LV: 143519,
  LY: 143567,
  MA: 143620,
  MD: 143523,
  ME: 143619,
  MG: 143531,
  MK: 143530,
  ML: 143532,
  MM: 143570,
  MN: 143592,
  MO: 143515,
  MR: 143590,
  MS: 143547,
  MT: 143521,
  MU: 143533,
  MV: 143488,
  MW: 143589,
  MX: 143468,
  MY: 143473,
  MZ: 143593,
  NA: 143594,
  NE: 143534,
  NG: 143561,
  NI: 143512,
  NL: 143452,
  NO: 143457,
  NP: 143484,
  NR: 143606,
  NZ: 143461,
  OM: 143562,
  PA: 143485,
  PE: 143507,
  PG: 143597,
  PH: 143474,
  PK: 143477,
  PL: 143478,
  PT: 143453,
  PW: 143595,
  PY: 143513,
  QA: 143498,
  RO: 143487,
  RS: 143500,
  RU: 143469,
  RW: 143621,
  SA: 143479,
  SB: 143601,
  SC: 143599,
  SE: 143456,
  SG: 143464,
  SI: 143499,
  SK: 143496,
  SL: 143600,
  SN: 143535,
  SR: 143554,
  ST: 143598,
  SV: 143506,
  SZ: 143602,
  TC: 143552,
  TD: 143581,
  TH: 143475,
  TJ: 143603,
  TM: 143604,
  TN: 143536,
  TO: 143608,
  TR: 143480,
  TT: 143551,
  TW: 143470,
  TZ: 143572,
  UA: 143492,
  UG: 143537,
  US: 143441,
  UY: 143514,
  UZ: 143566,
  VC: 143550,
  VE: 143502,
  VG: 143543,
  VN: 143471,
  VU: 143609,
  XK: 143624,
  YE: 143571,
  ZA: 143472,
  ZM: 143622,
  ZW: 143605
};

const languages = {
  // 'pt-br': 15,
  IT: 7, // 'it-it'
  IN: 50, // 'hi-in'
  // 'ca-es': 42,
  ES: 8, // 'es-es'
  TW: 18, // 'zh-tw'
  TH: 35, // 'th-th'
  DK: 11, // 'da-dk'
  FI: 12, // 'fi-fi'
  GB: 2, // 'en-gb'
  NL: 10, // 'nl-nl'
  PL: 20, // 'pl-pl'
  RO: 39, // 'ro-ro'
  CN: 19, // 'zh-cn'
  NO: 14, // 'no-no'
  PT: 24, // 'pt-pt'
  CH: 57, // 'de-ch'
  UA: 29, // 'uk-ua'
  US: 1, // 'en-us'
  VN: 43, // 'vi-vi'
  SE: 17, // 'sv-se'
  CA: 6, // 'en-ca'
  FR: 3, // 'fr-fr'
  SK: 40, // 'sk-sk'
  HK: 45, // 'zh-hk'
  HR: 41, // 'hr-hr'
  AU: 27, // 'en-au'
  KR: 13, // 'ko-kr'
  TR: 25, // 'tr-tr'
  GR: 23, // 'el-gr'
  MY: 38, // 'ms-my'
  ID: 37, // 'id-id'
  CZ: 22, // 'cs-cz'
  HU: 21, // 'hu-hu'
  // 'fr-ca': 5,
  MX: 28, // 'es-mx'
  DE: 4, // 'de-de'
  RU: 16, // 'ru-ru'
  JP: 9, // 'ja-jp'
};

module.exports = { collection, category, device, sort, markets, platforms, languages };
