import { IphoneObservableImpl } from "./observable/IphoneObservableImpl";
import { StocksObservable } from "./observable/StocksObservable";
import { EmailAlertObserverImpl } from "./observer/EmailAlertObserverImpl";
import { NotificationAlertObserver } from "./observer/NotificationAlertObserver";

const stockObs: StocksObservable = new IphoneObservableImpl();

const emailNotification1: NotificationAlertObserver = new EmailAlertObserverImpl(stockObs, "xyz@gmail.com");
const emailNotification2: NotificationAlertObserver = new EmailAlertObserverImpl(stockObs, "xyz2@gmail.com");

stockObs.add(emailNotification1);
stockObs.add(emailNotification1);
stockObs.setStockCount(10); // Email sent to
stockObs.setStockCount(-10); // No email sent
stockObs.setStockCount(10); // Email sent to
stockObs.setStockCount(10); // No email sent