import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { NodeService } from './node.service';
import { Prisma } from '@prisma/client';

@Controller('node')
export class NodeController {
    constructor(private readonly nodeService: NodeService) { }

    @Post()
    create(@Body() createEmployeeDto: Prisma.NodesCreateInput) {
      return this.nodeService.create(createEmployeeDto);
    }

    @Get()
    findAll() {
        return this.nodeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.nodeService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEmployeeDto: Prisma.NodesUpdateInput) {
        return this.nodeService.update(id, updateEmployeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.nodeService.remove(id);
    }
}
