import { Corretions } from "../src/Domain/exame/entity/corrections";
import { CorrectionsRepository } from "../src/Domain/exame/repository/CorrectionsRepository";



export class inMemoryCorrectionsRepository implements CorrectionsRepository {

    public items: Corretions[] = [];

    async findById(id: string): Promise<Corretions | null> {
       const corrections = this.items.find(challenge => challenge.id === id);

       if(!corrections) {
        return null;
       }

       return corrections;

    }

}