import { Challenge } from "../src/Domain/exame/entity/challenge";
import { ChallengeRepository } from "../src/Domain/exame/repository/ChallengeRepository";


export class inMemoryChallengesRepository implements ChallengeRepository {

    public items: Challenge[] = [];

    async findById(id: string): Promise<Challenge | null> {
       const challenge = this.items.find(challenge => challenge.id === id);

       if(!challenge) {
        return null;
       }

       return challenge;

    }

    async findByName(title: string): Promise<Challenge | null> {
        const challengeName = this.items.find(challengeName => challengeName.props.title === title
            
            
            );

        if(!challengeName) {
            return null;
        }

        return challengeName;
    }

}