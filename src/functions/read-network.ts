import { readFileSync } from "node:fs";
import type { ClinicNetwork } from "../types/clinic.js";

export function readNetwork(filePath: string): ClinicNetwork {
  const rawData = readFileSync(filePath, "utf-8");
  const network = JSON.parse(rawData) as ClinicNetwork;
  return network;
}