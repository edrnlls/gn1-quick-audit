import type { NetworkMetrics } from "../types/metrics.js";

export function formatMetrics(metrics: NetworkMetrics): string {
    return `
📊 NETWORK OVERVIEW
Total units: ${metrics.totalUnits}
Active units: ${metrics.activeUnits}
Total monthly revenue: R$ ${metrics.totalMonthlyRevenue.toLocaleString("en-US")}
Consolidated net margin: ${metrics.consolidatedNetMargin}%
Average ticket: R$ ${metrics.averageTicket.toLocaleString("en-US")}
`;
}
