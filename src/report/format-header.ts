import type { ClinicNetwork } from "../types/clinic.js";

export function formatHeader(network: ClinicNetwork): string {
    return `
═══════════════════════════════════════════════
  GN1 QUICK AUDIT · Network Performance Report
═══════════════════════════════════════════════

Network: ${network.networkName}
Report Date: ${network.reportDate}
`;
}