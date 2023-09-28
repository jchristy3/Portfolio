export interface Skill {
    id: number;
    name: string;
    experienceLevel: number;
    yearsExperience: number;
    lastUsed: Date;
    description: string;
    categories: string[];
    tags: string[];
}