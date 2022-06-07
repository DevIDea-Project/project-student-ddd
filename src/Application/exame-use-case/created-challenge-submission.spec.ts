import { inMemoryStudentsRepository } from "../../../test/in-memory-students-repository";
import { inMemoryChallengesRepository } from "../../../test/in-memory-challenges-repository";
import { inMemoryCorrectionsRepository } from "../../../test/in-memory-corrections-repository";
import { Corretions } from "../../Domain/exame/entity/corrections";
import { CreateChallengeSubmission } from "./created-challenge-submission";
import { Student } from "../../Domain/student/entity/student";
import { Challenge } from "../../Domain/exame/entity/challenge";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async ()  => {

        const studentRepository = new inMemoryStudentsRepository();
        const challengeRepository = new inMemoryChallengesRepository();
        const correctionsRepository = new inMemoryCorrectionsRepository();

        const student = Student.create({
            name: 'Bruno Vinicius',
            email: "brunoviniciustica@gmail.com"
        });

        const challenge = Challenge.create({
            title: "Challenge 01",
            instructionsUrl: "hppts.test.com"
        });

        const corrections = Corretions.create({
            grade: 8,
            submissionId: "Prova Final"

        });

        studentRepository.items.push(student);
        challengeRepository.items.push(challenge);
        correctionsRepository.items.push(corrections);

        const sut = new CreateChallengeSubmission(
            studentRepository, 
            challengeRepository,
            correctionsRepository
        );


        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id,
            correctionsId: corrections.id
        })

        expect(response).toBeTruthy();
    })

});

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async ()  => {

        const studentRepository = new inMemoryStudentsRepository();
        const challengeRepository = new inMemoryChallengesRepository();
        const correctionsRepository = new inMemoryCorrectionsRepository();

        const student = Student.create({
            name: 'Bruno Vinicius',
            email: "brunoviniciustica@gmail.com"
        });

        const challenge = Challenge.create({
            title: "Challenge 01",
            instructionsUrl: "hppts.test.com"
        });

        const corrections = Corretions.create({
            grade: 8,
            submissionId: "Prova Final"

        });

        studentRepository.items.push(student);
        challengeRepository.items.push(challenge);
        correctionsRepository.items.push(corrections);

        const sut = new CreateChallengeSubmission(
            studentRepository, 
            challengeRepository,
            correctionsRepository
        );


        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id,
            correctionsId: corrections.id
        })

        expect(response).toBeTruthy();
    })

});
