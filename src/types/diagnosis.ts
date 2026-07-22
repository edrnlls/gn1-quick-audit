export interface Diagnosis {
    clinicName: string;
    status: "HEALTHY" | "REGULAR" | "WARNING" | "CRITICAL";
    message: string;
    emoji: string
}