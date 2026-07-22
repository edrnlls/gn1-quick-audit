import type { NetworkAlerts } from "../functions/generate-alerts.js";

export function formatAlerts(alerts: NetworkAlerts): string {
    const lossLine =
        alerts.unitsAtLoss.length === 0
            ? "Units at loss: none — congratulations"
            : `Units at loss: ${alerts.unitsAtLoss.join(", ")}`;

    const warningLine =
        alerts.unitsInWarning.length === 0
            ? "Units in warning zone: none"
            : `Units in warning zone: ${alerts.warningCount} (${alerts.unitsInWarning.join(", ")})`;

    const actionLine =
        alerts.criticalCount > 0
            ? `Recommended immediate action: review operations at ${alerts.unitsAtLoss.join(", ")}`
            : "Recommended action: keep monitoring";

    return `
🚨 ALERTS
   ${lossLine}
   ${warningLine}
   ${actionLine}
`;
}