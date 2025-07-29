import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')  // route it handle domain/users
export class UsersController {

    @Get()  // GET /users || /users?role=value
    findAll(@Query('role') role?:"INTERN" | "ENGINEER" | "ADMIN"){
        return []
    }


    @Get(':id')  // GET /users/:id
    findOne(@Param('id') id:string){
        return { id }
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
    create(@Body() user:{}){
        return user
    }

    @Patch(':id')   // PATCH /users/:id
    update(@Param('id') id:string, @Body() userUpdated:{}){
        return { id, ...userUpdated}
    }

    @Delete(':id')  // DELETE /users/:id
    delete(@Param('id') id:string){
        return { id }
    }


}
