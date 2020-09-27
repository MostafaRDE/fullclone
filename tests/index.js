const { clone } = require('../dist')

console.log(clone([ 1, 2, 3 ]))

console.log(clone({
    username: 'username',
    password: '***',
}))

class example
{
    example = 'Example'
}

console.log(clone(example))