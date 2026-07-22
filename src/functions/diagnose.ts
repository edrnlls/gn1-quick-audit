import type { Clinic } from "../types/clinic.js";
import type { Diagnosis } from "../types/diagnosis.js";

export function diagnose(clinic: Clinic): Diagnosis {
    // Defensive validation
    if (clinic.monthlyRevenue < 0) {
        throw new Error(`Invalid revenue at ${clinic.name}: cannot be negative.`);
    }
    if (clinic.totalCosts < 0) {
        throw new Error(`Invalid costs at ${clinic.name}: cannot be negative.`);
    }
    if (clinic.activePatients < 0) {
        throw new Error(`Invalid patient count at ${clinic.name}: cannot be negative.`);
    }

    // Business rules
    if (clinic.activePatients < 10) {
        return {
            clinicName: clinic.name,
            status: "CRITICAL",
            message: "Patient base too low",
            emoji: "🔴",
        };
    }

    if (clinic.monthlyRevenue < clinic.totalCosts) {
        return {
            clinicName: clinic.name,
            status: "CRITICAL",
            message: "Operating at loss",
            emoji: "🔴",
        };
    }

    if (clinic.monthlyRevenue > 80000 || clinic.activePatients > 50) {
        return {
            clinicName: clinic.name,
            status: "HEALTHY",
            message: "High performance",
            emoji: "🟢",
        };
    }

    if (clinic.monthlyRevenue < 30000 || clinic.activePatients <20) {
        return {
            clinicName: clinic.name,
            status: "WARNING",
            message: "Monitor closely",
            emoji: "🟡",
        };
    }

   return {
    clinicName: clinic.name,
    status: "REGULAR",
    message: "Within expected range",
    emoji: "⚪",
   };
}