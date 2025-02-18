import { EmployeeDaoProxy } from './EmployeeDaoProxy';
import { EmployeeDo } from './EmployeeDo';

class ProxyDesignPattern {
    public static main(): void {
        try{
            let employeeProxyObj = new EmployeeDaoProxy();
            employeeProxyObj.create('user', new EmployeeDo(1, 'John Doe', 'Developer'));
            console.log("Operation successful");
        }catch(e){
            console.log("Operation failed");
        }
    }
}

ProxyDesignPattern.main();