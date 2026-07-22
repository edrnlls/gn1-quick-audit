import type { Clinic } from "../types/clinic.js";
import type { NetworkMetrics } from "../types/metrics.js";

export function calculateNetworkMetrics(clinics: Clinic[]): NetworkMetrics {
    // Defensive validation
    if (clinics.length === 0) {
        throw new Error(`Cannot calculate metrics: network has no clinics.`);
    }

    const activeClinics = clinics.filter((c) => c.isActive === true);

    const totalMonthlyRevenue = clinics
        .map((c) => c.monthlyRevenue)
        .reduce((sum, value) => sum + value, 0);

    const totalCosts = clinics
        .map((c) => c.totalCosts)
        .reduce((sum, value) => sum + value, 0);

    const totalActivePatients = clinics
        .map((c) => c.activePatients)
        .reduce((sum, value) => sum + value, 0);

    // Guard against division by zero

    const consolidatedNetMargin =
        totalMonthlyRevenue > 0
            ? ((totalMonthlyRevenue - totalCosts) / totalMonthlyRevenue) * 100
            : 0;

    const averageTicket =
        totalActivePatients > 0
            ? totalMonthlyRevenue / totalActivePatients
            : 0;

    return {
        totalUnits: clinics.length,
        activeUnits: activeClinics.length,
        totalMonthlyRevenue,
        consolidatedNetMargin: Math.round(consolidatedNetMargin * 10) / 10,
        averageTicket: Math.round(averageTicket),
    };
}