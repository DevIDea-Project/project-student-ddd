import { Entity } from "../../../Infrastructure/Entity/Entity";

type StudentProps = {
   name: string;
   email: string;
}

export class Student extends Entity<StudentProps> {

    private constructor(props: StudentProps, id?: string) {
        super(props, id);
    }

    static create(props: StudentProps) {
        const student = new Student(props);

        return student;
    }
}
