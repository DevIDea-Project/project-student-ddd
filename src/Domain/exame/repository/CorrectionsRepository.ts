import { Corretions } from "../entity/corrections";

export interface CorrectionsRepository {
    findById(id: string): Promise<Corretions | null>;
}