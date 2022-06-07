import { Entity } from "../../../Infrastructure/Entity/Entity";

type CorretionsProps = {
    grade: number;
    submissionId: string;
    createdAt?: Date;
}

export class Corretions extends Entity<CorretionsProps> {

   private constructor(props: CorretionsProps, id?: string) {
        super(props, id);
    }

    static create(props: CorretionsProps) {
        const corrections = new Corretions(props);

        return corrections;
    }

}
