import { Entity } from '../../core/domain/Entity';
import { Repository } from './../../application/repositories/Repository';
export abstract class InMemoryRepository<T extends Entity<object>> implements Repository<T> {
    private items: T[] = [];
    async findById(id: string): Promise<T | null>{
        const item = this.items.find(item=>item.id === id);
        return item ?? null;
    }

    setupRepository(items: T[]){
        this.items = []
        items.forEach(i=>{
            this.items.push(i)
        })
    }
}