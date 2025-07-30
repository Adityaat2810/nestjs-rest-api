import { Injectable } from '@nestjs/common';

export type typeUser = {
    name: string,
    email: string,
    role: 'INTERN' | 'ENGINEER' | 'ADMIN'
}

export type updateUser= {
    name?: string;
    email?: string;
    role?: string;
}

@Injectable()
export class UsersService {
    private users = [
        // 5 users
        {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            role: "INTERN"
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@gmail.com',
            role: "ENGINEER"
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice@gmail.com',
            role: "ADMIN",
        },
        {
            id: 4,
            name: 'Bob Brown',
            email: 'bob@gmail.com',
            role: "INTERN"
        },
        {
            id: 5,
            name: 'Charlie White',
            email: 'charlie@gmail.com',
            role: "ENGINEER"
        }

    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            console.log('role is ', role)
            return this.users.filter(
                user => user.role == role
            )
        }

        return this.users;
    }

    findOne(id: number){
        const user = this.users.find(user=> user.id === id);
        return user;
    }

    create(user: typeUser){
        const userByHighestId = this.users.length;
        const newUser = {
            id: userByHighestId+1,
            ...user
        }

        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUser: updateUser){
        this.users = this.users.map(user=>{
            if(user.id=== id){
                return {...user, ...updatedUser}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id)
        this.users=this.users.filter(user=> user.id !== id)
        return removedUser
    }
}
