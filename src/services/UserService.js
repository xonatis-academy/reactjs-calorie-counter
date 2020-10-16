export default class UserService {

    users = [
        {
            firstname: 'Jeanna',
            username: 'jeanna@top.com',
            password: 'jeanna'
        },
        {
            firstname: 'Kevin',
            username: 'kevin@top.com',
            password: 'kevin'
        },
        {
            firstname: 'Burt',
            username: 'burt@top.com',
            password: 'burt'
        }
    ]

    // precondition : username : string
    // postcondition : recuperer l'utilisateur dont le username est égal au username en argment : dictionnaire
    get(usernameToMatch) {

        for (const a of this.users) {
            if (a.username == usernameToMatch) {
                return a;
            }
        }

        return null;
    }
    
    // precondition : username: string, password: string
    // postcondition : si le username et le mot de passe sont valides alors True sinon False : boolean
    connect(usernameToSearch, passwordToSearch) {

        for (const a of this.users) {
            if (a.username == usernameToSearch && a.password == passwordToSearch) {
                return true;
            }
        }

        return false;
    }
    
    // precondition : username: string, password: string, firstname: string
    // postcondition : ajouter 1 user, true si success false sinon: boolean
    add(usernameToAdd, passwordToAdd, firstnameToAdd) {
        for (const a of this.users) {
            if (a.username == usernameToAdd) {
                return false;
            }
        }

        let newUser = {
            firstname: firstnameToAdd,
            password: passwordToAdd,
            username: usernameToAdd
        };

        this.users.push(newUser);
        return true;
    }

}