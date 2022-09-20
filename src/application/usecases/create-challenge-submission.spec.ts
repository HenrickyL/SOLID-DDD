import { Challenge } from './../../domain/entities/challenge';
import { Student } from "../../domain/entities/student";
import { InMemoryChallengeRepository } from "../../tests/repository/in-memory-challanges-repository";
import { InMemoryStudentsRepository } from "../../tests/repository/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', ()=>{
    it('Should be able to create a new challenge submission',async ()=>{
        //Arrange 
        const student = Student.create({
            name: 'aluno',
            email:'alu@exemple.com'
        })
        const challenge = Challenge.create({
            title:"challange 01",
            instructionsUrl:'http://exemple.com'
        })
        
        const studentRepository = new InMemoryStudentsRepository();
        studentRepository.setupRepository([student])
        const challengeRepository = new InMemoryChallengeRepository();
        challengeRepository.setupRepository([challenge])
        
        // Act 
        const sut = new CreateChallengeSubmission(
            studentRepository,
            challengeRepository
        );
        const response  = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id
        })

        // Assert 
        expect(response).toBeTruthy()
    })
})