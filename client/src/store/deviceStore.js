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
            {id: 1, name: 'TOM CLANCYS RAINBOW SIX SIEGE', price: 2500, rating: 5, img: `https://static.gabestore.ru/product/0_j1Ci2n2Vnd2zVuX4WATB4juk1xtRzq.jpg`},
            {id: 2, name: 'GRAND THEFT AUTO V: PREMIUM ONLINE EDITION', price: 2500, rating: 5, img: `https://static.gabestore.ru/product/_j7jVtprTbPuXbtnJsoGmTMEc3tM7sbI.jpg`},
            {id: 3, name: 'RED DEAD REDEMPTION 2', price: 2500, rating: 5, img: `https://static.gabestore.ru/product/_i7m56e9JTZ0uhdNiaotedfAfQSa93xQ.jpg`},
            {id: 4, name: 'FAR CRY 5', price: 2500, rating: 5, img: `https://static.gabestore.ru/product/cWiz77h6dlKn4E10q3zVTp2DkMbB_hFl.jpg`},
        ];
        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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
    get selectedBrand() {
        return this._selectedBrand;
    }
}