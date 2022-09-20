import { Entity } from "../../core/domain/Entity";

export abstract class Builder<T extends Entity<object>>{
    protected item: T
    static id:number=0
    constructor(obj:T){
        Builder.id=0
        this.generate();
    }
    
    private generate(){
        Builder.id+=1
        Object.keys(this.item).forEach(key => {
            switch(typeof this.item[key]) {
              case 'string':
                this.item[key] = `${key}-${Builder.id}}`;
                 break;
            case 'number':
                this.item[key] = Math.random()%100;
                break;
            case 'boolean':
                this.item[key] = Math.random()%2 ==0;
                break;
            }
          })
    }
    public create(){
        const response = this.item
        this.generate();
        return response;
    }
}