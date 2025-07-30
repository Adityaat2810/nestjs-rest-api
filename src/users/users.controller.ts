import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { typeUser, updateUser, UsersService } from './users.service';

@Controller('users')  // route it handle domain/users
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()  // GET /users || /users?role=value
    findAll(@Query('role') role?:"INTERN" | "ENGINEER" | "ADMIN"){
        return this.usersService.findAll(role)
    }


    @Get(':id')  // GET /users/:id
    findOne(@Param('id') id:string){
        // return this.usersService.findOne(Number(id))
        return this.usersService.findOne(+id) // unary

    }

    /*
    // it will through error as it will red prvious route and think intrns as userId
    @Get('interns ') // GET /users/interns
    findAllInterns(){
        return []
    }
        ==> solutiuon use before getId wlal route
        ==> so order matter here
        */

    @Post()  //  POST /users/
    create(@Body() user:typeUser){
        return this.usersService.create(user)
    }

    @Patch(':id')   // PATCH /users/:id
    update(@Param('id') id:string, @Body() userUpdated:updateUser){
        return this.usersService.update(+id, userUpdated)
    }

    @Delete(':id')  // DELETE /users/:id
    delete(@Param('id') id:string){
        return this.usersService.delete(+id)

    }


}
