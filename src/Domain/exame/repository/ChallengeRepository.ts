import { Challenge } from "../entity/challenge";

export interface ChallengeRepository {
    findById(id: string): Promise<Challenge | null>
    findByName(title: string): Promise<Challenge | null>
}
