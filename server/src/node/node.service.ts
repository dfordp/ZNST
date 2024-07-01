import { Injectable } from '@nestjs/common';
import { Prisma} from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class NodeService {
    constructor(private readonly databaseService: DbService) { }


    async create(createEmployeeDto: Prisma.NodesCreateInput) {
        return this.databaseService.nodes.create({
          data: createEmployeeDto
        })
      }

    async findAll() {
        return this.databaseService.nodes.findMany()
    }

    async findOne(id: string) {
        return this.databaseService.nodes.findUnique({
          where: {
            id,
          }
        })
      }
    

    async update(id: string, updateEmployeeDto: Prisma.NodesUpdateInput) {
        return this.databaseService.nodes.update({
          where: {
            id,
          },
          data: updateEmployeeDto,
        })
      }

      async remove(id: string) {
        return this.databaseService.nodes.delete({
          where: {
            id,
          }
        })
      }

}
