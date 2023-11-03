const currencySymbols = {
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: 'A$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'КМ',
  BBD: 'Bds$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: 'BD$',
  BND: 'B$',
  BOB: 'Bs.',
  BRL: 'R$',
  BSD: 'B$',
  BTN: 'Nu.',
  BWP: 'P',
  BYN: 'Br',
  BZD: 'BZ$',
  CAD: 'C$',
  CDF: 'FC',
  CHF: 'Fr',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CRC: '₡',
  CUP: '₱',
  CVE: '$',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EGP: 'ج.م',
  ERN: 'Nfk',
  ETB: 'Br',
  EUR: '€',
  FJD: 'FJ$',
  FKP: '£',
  FOK: 'ƒ',
  GEL: '₾',
  GGP: '£',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: 'G$',
  HKD: 'HK$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'د.ا',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'с',
  KHR: '៛',
  KID: 'CI$',
  KRW: '₩',
  KWD: 'د.ك',
  KYD: 'CI$',
  KZT: '₸',
  LAK: '₭',
  LBP: 'ل.ل',
  LKR: '₨',
  LRD: 'L$',
  LSL: 'M',
  LYD: 'ل.د',
  MAD: 'د.م.',
  MDL: 'L',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'Ks',
  MNT: '₮',
  MOP: 'MOP$',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: 'Mex$',
  MYR: 'RM',
  MZN: 'MT',
  NAD: 'N$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: 'NZ$',
  OMR: 'ر.ع.',
  PAB: 'B/.',
  PEN: 'S/',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: '₲',
  QAR: 'ر.ق',
  RON: 'lei',
  RSD: 'дин',
  RUB: '₽',
  RWF: 'FRw',
  SAR: 'ر.س',
  SBD: 'SI$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: 'S$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'Sh',
  SRD: 'SRD$',
  SSP: '£',
  STN: 'Db',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'ЅМ',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRY: '₺',
  TTD: 'TT$',
  TWD: 'NT$',
  TZS: 'Sh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYU: '$',
  UZS: 'лв',
  VES: 'Bs.S',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XCD: 'EC$',
  XOF: 'CFA',
  XPF: '₣',
  YER: '﷼',
  ZAR: 'R',
  ZMW: 'K',
};
const api = "https://api.exchangerate-api.com/v4/latest/USD";
let search = document.querySelector(".searchBox");
let convert = document.querySelector(".convert");
let fromCurrency = document.querySelector(".from");
let toCurrency = document.querySelector(".to");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;
fromCurrency.addEventListener('change', (event) => {
  resultFrom = `${event.target.value}`;
});
toCurrency.addEventListener('change', (event) => {
  resultTo = `${event.target.value}`;
});
search.addEventListener('input', updateValue);
function updateValue(e) {
  searchValue = e.target.value;
}
convert.addEventListener("click", getResults);
function getResults() {
  fetch(api)
    .then(currency => {
      return currency.json();
    })
    .then(displayResults);
}
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  let convertedAmount = ((toRate / fromRate) * searchValue).toFixed(2);
  finalValue.innerHTML = `${currencySymbols[resultFrom]} ${searchValue} = ${currencySymbols[resultTo]} ${convertedAmount}`;
  finalAmount.style.display = "block";
}
function clearVal() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
}
