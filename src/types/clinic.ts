export interface Clinic {
    name: string;
    city: string;
    monthlyRevenue: number;
    totalCosts: number;
    activePatients: number;
    isActive: boolean;
    notes: string|null
}

export interface ClinicNetwork {
    networkName: string;
    reportDate: string;
    clinics: Clinic []
}