export interface ObservableInterface {
    add(ObserverInterface): void;
    remove(ObserverInterface): void;
    notify(): void;
    setData(data: number): void;
}