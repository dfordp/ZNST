import { Injectable } from '@nestjs/common';
import { Prisma} from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DbService) { }

    async create(createEmployeeDto: Prisma.UserCreateInput) {
        return this.databaseService.user.create({
          data: createEmployeeDto
        })
      }

    async findAll() {
        return this.databaseService.user.findMany()
    }

    async findOne(id: string) {
        return this.databaseService.user.findUnique({
          where: {
            id,
          }
        })
      }
      
      async findByEmail(email: string) {
        return this.databaseService.user.findUnique({
          where: {
            email,
          }
        })
      }

      async update(id: string, updateEmployeeDto: Prisma.UserUpdateInput) {
        return this.databaseService.user.update({
          where: {
            id,
          },
          data: updateEmployeeDto,
        })
      }

      async remove(id: string) {
        return this.databaseService.user.delete({
          where: {
            id,
          }
        })
      }
}
