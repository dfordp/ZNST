import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';
import { NodeModule } from './node/node.module';

@Module({
  imports: [UsersModule, DbModule, NodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
