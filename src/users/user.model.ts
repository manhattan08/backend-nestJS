import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Roles } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";
import { Post } from "../posts/posts.model";

interface UserCreationAttrs{
  email:string,
  password:string
}

@Table({tableName:"users"})
export class User extends Model<User,UserCreationAttrs>{
  @ApiProperty({example:"228",description:"Unique identifier"})
  @Column({type:DataType.INTEGER, unique:true,autoIncrement:true,primaryKey:true})
    id:number;
  @ApiProperty({example:"user@gmail.com",description:"Email"})
  @Column({type:DataType.STRING, unique:true,allowNull:false})
    email:string;
  @ApiProperty({example:"rootPassword",description:"Password user"})
  @Column({type:DataType.STRING,allowNull:false})
    password:string;
  @ApiProperty({example:"true",description:"Banned user or not"})
  @Column({type:DataType.BOOLEAN, defaultValue:false})
    banned:boolean;
  @ApiProperty({example:"Bad boy",description:"Reason of ban"})
  @Column({type:DataType.STRING,allowNull:true})
    banReason:string;

  @BelongsToMany(()=> Roles, ()=> UserRoles)
  roles:Roles[];

  @HasMany(()=>Post)
  posts:Post[]
}