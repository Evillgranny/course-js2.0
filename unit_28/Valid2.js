class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.emaiError = ''
        this.passwordError = ''
    }

    validate () {
        if (this.password.split('').length > 5) {
            this.isValid = true
        } else {
            this.passwordError = 'min length 6'
        }

        if (!this.email) {
            this.isValid = false
            this.emaiError = 'email empty'
        }
    }

}