const moment = require('moment');

class Account {
    #amount;
    #account_id;

constructor(name1, amount, account_id) {
    this.name1 = name1;
    this.#amount = amount;
    this.#account_id = account_id;
}

tellMeBalance() {
    console.log(`Sizning hisobingizdagi qoldiq: ${this.#amount}$`);
    return this.#amount;
}

withdrawMoney(amount) {
    if (this.#amount > amount) {
        this.#amount -= amount;
        console.log(`Hisobdan ${amount} yechildi va qoldiq ${this.#amount}$`);
    } else {
        console.log(`Sizning hisobingizdagi pul yetarli emas: ${this.#amount}$`);
    }
    }
makeDeposit(amount) {
    this.#amount += amount;
    console.log(`Hisobingiz to'ldirildi ${this.#amount}$ tashkil etdi`);
}

giveMeDetails() {
    console.log(`Salom hurmatli ${this.name1} sizning hisobingiz ${this.#amount}$ ga teng`);
    console.log('Hisob raqamingiz:', this.#account_id);
}

static tellMeAboutClass() {
    console.log('Bu class accountlarni yasash uchun xizmat qiladi');
}

static tellMeTime() {
    console.log(`Hozirgi vaqt ${moment().format('YYYY MM DD HH:mm')}`);
}

}

module.exports = Account;