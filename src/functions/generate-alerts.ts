import type { Diagnosis } from "../types/diagnosis.js";

export interface NetworkAlerts {
    unitsAtLoss: string[];
    unitsInWarning: string[];
    criticalCount: number;
    warningCount: number;
}

export function generateAlerts(diagnoses: Diagnosis[]): NetworkAlerts {
    const unitsAtLoss = diagnoses
        .filter((d) => d.status === "CRITICAL" && d.message === "Operating at loss")
        .map((d) => d.clinicName);

    const unitsInWarning = diagnoses
        .filter((d) => d.status === "WARNING")
        .map((d) => d.clinicName);

    const criticalCount = diagnoses
        .filter((d) => d.status === "CRITICAL").length;

    const warningCount = diagnoses
        .filter((d) => d.status === "WARNING").length;

    return {
        unitsAtLoss,
        unitsInWarning,
        criticalCount,
        warningCount,
    };  
}
