import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {
                id: 1, name: 'ЭКШЕН',
            },
            {
                id: 2, name: 'РОЛЕВЫЕ',
            },
            {
                id: 3, name: 'ПРИКЛЮЧЕНИЯ',
            },
            {
                id: 4, name: 'СТРАТЕГИИ',
            },
            {
                id: 5, name: 'СИМУЛЯТОРЫ',
            },
            {
                id: 6, name: 'ОНЛАЙН',
            },
            {
                id: 7, name: 'ИНДИ',
            },
            {
                id: 8, name: 'СПОРТ',
            },
        ];
        this._brands = [
            {
                id: 1, name: 'GSG',
            },
            {
                id: 2, name: 'Rockstar',
            }
        ];
        this._devices = [
            {id: 1, name: 'Iphone', price: 2500, rating: 5, img: ``},
            {id: 2, name: 'Iphone', price: 2500, rating: 5, img: ``},
            {id: 3, name: 'Iphone', price: 2500, rating: 5, img: ``},
            {id: 4, name: 'Iphone', price: 2500, rating: 5, img: ``},
        ];
        this._selectedType = {};
        makeAutoObservable(this);
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
}