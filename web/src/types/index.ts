interface InnovationType {
    id: number,
    name: string,
    industry?: string,
    usage: string,
}

interface InnovationData {
    id: number,
    name: string,
    chain: string[],
    use: string,
    implementation_phase: string,
    year: string | Date,
}