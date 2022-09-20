import { Student } from './../../domain/entities/student';
import { Builder } from "./builder";

export class StudentBuilder extends Builder<Student>{
    constructor(){
        super(Student.create({
            name:'',
            email:''
        }))
    }
    withName(name: string){
        this.item.props.name = name
        return this;
    }
}