import { Submission } from "../../Domain/exame/entity/submession";
import { ChallengeRepository } from "../../Domain/exame/repository/ChallengeRepository";
import { CorrectionsRepository } from "../../Domain/exame/repository/CorrectionsRepository";
import { StudentRepository } from "../../Domain/student/repository/StudentRepository";

type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
    correctionsId: string;
}

export class CreateChallengeSubmission {
    constructor(
        private studentRepository: StudentRepository,
        private challengeRepository: ChallengeRepository,
        private correctionsRepository: CorrectionsRepository
    ) {}
      

    async execute({studentId, challengeId, correctionsId }: CreateChallengeSubmissionRequest) {

        const student = await this.studentRepository.findById(studentId);
        const challenge = await this.challengeRepository.findById(challengeId);
        const corrections = await this.correctionsRepository.findById(correctionsId);

        if(!student) {
            throw new Error('Student does not exists!');
        }

        if(!challenge) {
            throw new Error('Challenge does not exists!');
        }

        if(!corrections) {
            throw new Error('Corrections does not exists!');
        }
        

        const submission =  Submission.create({
            studentId,
            challengeId,
            correctionsId
        })

        return submission;

    }
}
