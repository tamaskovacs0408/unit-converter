import { UnitFactorsType } from "../types/types";

export const lengthUnitFactors: UnitFactorsType = {
  mm: 0.001,
  cm: 0.01,
  dm: 0.1,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34,
};

export const weightUnitFactors: UnitFactorsType = {
  g: 0.001,
  dkg: 0.01,
  kg: 1,
  ton: 1000,
  oz: 0.0283495,
  lb: 0.453592,
};

export const volumeUnitFactors: UnitFactorsType = {
  ml: 0.001,
  cl: 0.01,
  dl: 0.1,
  l: 1,
  cbm: 1000,
  "fl oz": 0.0295735,
  pt: 0.473176,
  qt: 0.946353,
  gal: 3.78541,
};

export const timeUnitFactors: UnitFactorsType = {
  ms: 0.001,
  s: 1,
  min: 60,
  h: 3600,
  d: 86400,
  w: 604800,
  y: 31536000,
};

export const dataUnitFactors: UnitFactorsType = {
  b: 1,
  kb: 1024,
  mb: 1048576,
  gb: 1073741824,
  tb: 1099511627776,
};