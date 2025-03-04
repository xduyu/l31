class user {
    constructor(username, userlogin, userpassword) {
        this.name = username;
        this.login = userlogin;
        this.password = userpassword;
    }
    info() {
        console.log(`name: ${this.name}, login: ${this.login}, role: ${this.role}`)
    }
}

class Admin extends user {
    constructor(username, userlogin, userpassword) {
        super(username, userlogin, userpassword)
        this.name = username;
        this.login = userlogin;
        this.password = userpassword;
        this.role = 'Admin';
    }
    info() {
        console.log(`123`)
    }
}

class Student extends user {
    constructor(username, userlogin, userpassword) {
        super(username, userlogin, userpassword)
        this.role = 'Student';
    }
    info() {
        console.log(`${this.name}, Проходит курс`)
    }
}

class Teacher extends user {
    constructor(username, userlogin, userpassword) {
        super(username, userlogin, userpassword)
        this.role = 'Teacher';
    }
    info() {
        console.log(`${this.name}, Проверяет д/з [role: ${this.role}]`)
    }
}

const userA = new Admin('admin1', '123alogin', '123apass')
const userS = new Student('stu1', '123slogin', '123slogin')
const userT = new Teacher('teacher1', '123tlogin', '123tlogin')


userT.info()
userS.info()
console.log(userT)
console.log(userS)
console.log(userA)