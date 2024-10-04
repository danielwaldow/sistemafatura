import { program } from 'commander';
import { createUser, getUserByEmail, checkUserPassword, updateUser } from './user.repo';

program
    .command('create-user')
    .description('Cria um novo usuário')
    .requiredOption('-e, --email <email>', 'User email')
    .requiredOption('-f, --first-name <first_name>', 'User first name')
    .requiredOption('-l, --last-name <last_name>', 'User last name')
    .requiredOption('-p, --password <password>', 'User password')
    .option('-a, --is-admin', 'User is admin', false)
    .action(async (options) => {
        // console.log(options);
        try {
            let u = await createUser({
                email:      options.email,
                first_name: options.firstName,
                last_name:  options.lastName,
                password:   options.password,
                is_admin:   options.isAdmin
            });
            console.log("Usuario criado com id: ", u?.id);
        }
        catch (err) {
            console.error(err);
        }
    });

program
    .command('get-user-by-email')
    .description('Busca um usuário pelo email')
    .requiredOption('-e, --email <email>', 'User email')
    .action(async (options) => {
        try {
            let u = await getUserByEmail(options.email);
            if (!u) {
                console.log("Usuario nao encontrado");
                return;
            }
            console.log(u);
        }
        catch (err) {
            console.error(err);
        }
    });    

program
    .command('check-email-password')
    .description('Tenta autenticar email e senha')
    .requiredOption('-e, --email <email>', 'User email')
    .requiredOption('-p, --password <password>', 'User password')
    .action(async (options) => {
        try {
            let ok = await checkUserPassword(options.email, options.password);
            if (ok) 
                console.log("Usuario autenticado.");
            else
                console.log("Email e/ou senha invalido(s).");
        }
        catch (err) {
            console.error(err);
        }
    });     

program
    .command('update-password')
    .description('Atualiza a senha')
    .requiredOption('-e, --email <email>', 'User email')
    .requiredOption('-p, --password <password>', 'User password')
    .action(async (options) => {
        try {
            let u = await getUserByEmail(options.email);
            if (!u) {
                console.log("Usuario nao encontrado");
                return;
            }

            if (u.id) { 
                u.password = options.password;
                let updated = await updateUser(u.id, u);
                if (updated)
                    console.log("Senha atualizada para: ", updated.email);
            }
        }
        catch (err) {
            console.error(err);
        }
    });        


program.parse();