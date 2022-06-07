import { Entity } from "../../../Infrastructure/Entity/Entity";

type SubmissionProps = {
   challengeId: string;
   studentId: string;
   correctionsId: string,
   createdAt?: Date;

}

export class Submission extends Entity<SubmissionProps> {
    private constructor(props: SubmissionProps, id?: string) {
        super(props, id);
    }

    static create(props: SubmissionProps, id?: string ) {
        const submession = new Submission({
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }, id);

        return submession;
    }

}
