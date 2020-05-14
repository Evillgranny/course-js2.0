class Valid {
    constructor(email, password) {
        this.email = email
        this.password = password
        this.isValid = false
    }

    validate () {
        this.password.split('').length > 5  ? this.isValid = true : false
    }
}