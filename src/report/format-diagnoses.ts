import type { Diagnosis } from "../types/diagnosis.js";

export function formatDiagnoses(diagnoses: Diagnosis[]): string {
    if (diagnoses.length === 0) {
        return "\n🩺 UNIT DIAGNOSIS\n   No units to diagnose.\n";
    }

    const lines = diagnoses
        .map((d) => `${d.emoji} ${d.clinicName.padEnd(25)} — ${d.status}: ${d.message}`)
        .join("\n");

    return `
🩺 UNIT DIAGNOSIS
${lines}
`;
}