import { Account, goodMorning } from "./coreBanking";

const acc = new Account("Pete", 500)
acc.credit(500)
acc.debit(200)
acc.print()

goodMorning()

