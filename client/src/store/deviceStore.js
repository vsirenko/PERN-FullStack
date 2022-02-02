import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {
                id: 1, name: 'Survival',
            },
            {
                id: 2, name: 'Sandbox',
            }
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
        makeAutoObservable(this);
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
}