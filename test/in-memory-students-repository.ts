import { Student } from "../src/Domain/student/entity/student";
import { StudentRepository } from "../src/Domain/student/repository/StudentRepository";


export class inMemoryStudentsRepository implements StudentRepository {

    public items:  Student[] = [];

    async findById(id: string): Promise< Student | null> {
       const student = this.items.find(student => student.id === id);

       if(!student) {
        return null;
       }

       return student;

    }

}