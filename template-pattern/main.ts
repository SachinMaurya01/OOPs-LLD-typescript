import { PayToFriend } from "./PayToFriend";
import { PayToMerchant } from "./PayToMerchant";
import { Payment } from "./Payment";

class TemplatePattern {
    public static main(): void {
        const template1: Payment = new Payment(100, new PayToFriend());
        template1.pay();
        const template2: Payment = new Payment(200, new PayToMerchant());
        template2.pay();
    }
}

TemplatePattern.main();