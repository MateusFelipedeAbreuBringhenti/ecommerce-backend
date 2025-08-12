import { Controller, Delete, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";

@Controller('categories')
export class CategoryController {

    constructor(private readonly service: CategoryService) {}

    @Get()
    findAll(): Promise<Category[]> {
        return this.service.findAll();
    }


    @Get(':id')
    findById(@Param('id', ParseUUIDPipe) id: string): Promise<Category> {
        return this.service.findById(id);
    }

    @Post()
    save(category: Category): Promise<Category> {
        return this.service.save(category);
    }

    @Delete(':id')
    async remove(id: string): Promise<void> {
        await this.service.delete(id);
    }
}

