import { Entity } from "../../../Infrastructure/Entity/Entity";

type ChallengeProps = {
   title: string;
   instructionsUrl: string;
}

export class Challenge extends Entity<ChallengeProps> {

   private constructor(props: ChallengeProps, id?: string) {
        super(props, id);
    }

    static create(props: ChallengeProps) {
        const challenge = new Challenge(props);

        return challenge;
    }

}
