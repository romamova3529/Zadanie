let password = 'gjf_*';

if (password.length >= 4 || password.includes('*') || password.includes('_')) {
    console.log('Такой пароль подходит.')
    
} else {
    console.log('Такой пароль не подходит, введите подходящий пароль.')
}