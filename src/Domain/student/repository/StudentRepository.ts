import { Student } from "../../student/entity/student";

export interface StudentRepository {
    findById(id: string): Promise<Student | null>;
}
