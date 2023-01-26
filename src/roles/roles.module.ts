import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { RolesController } from "./roles.controller";
import { RolesService } from "./roles.service";
import { Roles } from "./roles.model";
import { User } from "../users/user.model";
import { UserRoles } from "./user-roles.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports:[
      SequelizeModule.forFeature([Roles,User,UserRoles])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
