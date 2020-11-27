import { Response, Request } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'jjns.januario@gmail.com',
        password: '123456789',
        techs: [
            'Node.js',
            'React.js',
            'React-Native',
            { title: 'JavaScript', experience: 30}            
        ],
    });

    return response.json({ user, message: 'Hello World '});
};