import { ChallengeRepository } from './../repositories/ChallengesRepository';
import { Submission } from './../../domain/entities/submission';
import StudentRepository from './../repositories/StudentsRepository';

type CreateChallengeSubmissionRequest ={
    studentId: string;
    challengeId:string
}
export class CreateChallengeSubmission{
    constructor(
        //syntaxSugar
        private StudentsRepository: StudentRepository,
        private ChallengeRepository: ChallengeRepository
    ){}

    async execute( props:CreateChallengeSubmissionRequest){
        const student = await this.StudentsRepository.findById(props.studentId)
        if(!student){
            // to see 'function error rendering' - como lidar com erros
            throw new Error('student does not exist!')
        }
        const challenge = await this.ChallengeRepository.findById(props.challengeId)
        if(!challenge){
            throw new Error('challenge does not exist!')
        }
        //
        const submisson = Submission.create({
            studentId: props.studentId,
            challengeId: props.challengeId
        })
        return submisson;
    }
}