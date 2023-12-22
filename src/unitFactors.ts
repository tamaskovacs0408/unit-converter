import { UnitFactorsType } from "./types"

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
}

export const weightUnitFactors: UnitFactorsType = {
  g: 0.001,             // gram
  dkg: 0.01,            // decagram
  kg: 1,                // kilogram as the base unit for weight
  ton: 1000,            // metric ton
  oz: 0.0283495,        // ounce
  lb: 0.453592,         // pound
};

export const volumeUnitFactors: UnitFactorsType = {
  ml: 0.001,            // milliliter
  cl: 0.01,             // centiliter
  dl: 0.1,              // deciliter
  l: 1,                 // liter as the base unit for volume
  cbm: 1000,            // cubic meter
  'fl oz': 0.0295735,   // fluid ounce
  pt: 0.473176,         // pint
  qt: 0.946353,         // quart
  gal: 3.78541,         // gallon
};