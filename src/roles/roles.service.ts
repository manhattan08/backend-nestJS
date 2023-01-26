import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from "../users/dto/create-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Roles } from "./roles.model";


@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles) private roleRepository: typeof Roles) {
  }
  async createRole(dto:CreateRoleDto){
    const role = await this.roleRepository.create(dto);
    return role;
  }
  async getRolesByValue(value:string){
    const role = await this.roleRepository.findOne({where:{value}})
    return role;
  }
}
