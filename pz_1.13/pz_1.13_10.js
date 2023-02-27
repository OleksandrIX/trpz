class Random {
    static nextInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
}

class ElectricStation {
    constructor(generatePowerUnit) {
        this.generatePowerUnit = generatePowerUnit;
    };

    getGeneratePowerUnit = () => this.generatePowerUnit;
}

class PowerPlant extends ElectricStation {
    constructor() {
        super();
        this.generatePowerUnit = Random.nextInt(1, 100);
    };
}

class SolarPanel extends ElectricStation {
    constructor() {
        super();
        this.generatePowerUnit = Random.nextInt(1, 4);
    };

    getGeneratePowerUnit = (dayTime) => {
        if (dayTime.toLowerCase() === 'day') return this.generatePowerUnit;
        else if (dayTime.toLowerCase() === 'night') return 0;
        else return 0;
    }
}

class House {
    constructor() {
        this.numberOfApartaments = Random.nextInt(1, 400);
    };

    getUsePowerUnit = (dayTime) => {
        if (dayTime.toLowerCase() === 'day') return this.numberOfApartaments * 4;
        else if (dayTime.toLowerCase() === 'night') return this.numberOfApartaments;
        else return 0;
    }
}

class PowerLine {
    constructor(costOnePowerUnit = 10, transposedPower = 0) {
        this.costOnePowerUnit = costOnePowerUnit;
        this.transposedPowerUnit = transposedPower;
    };

    getCostOnePowerUnit = () => this.costOnePowerUnit;
    getTransposedPowerUnit = () => this.transposedPowerUnit;
    setTransposedPowerUnit = (transposedPowerUnit) => this.transposedPowerUnit = transposedPowerUnit;
}

class ElectricNetwork {
    constructor(numberPowerPlants = 0, numberSolarPanels = 0, numberHouses = 0, priceOnePowerUnit = 50) {
        this.powerPlants = this.generateUnit(numberPowerPlants, PowerPlant);
        this.solarPanels = this.generateUnit(numberSolarPanels, SolarPanel);
        this.houses = this.generateUnit(numberHouses, House);
        this.powerLine = new PowerLine(priceOnePowerUnit);
    };

    generateUnit = (number, typeUnit) => number > 0 ? Array(number).fill(null).map(() => new typeUnit()) : [];

    getGeneratePowerUnit = (dayTime) => {
        let totalGeneratePowerUnit = 0;
        this.powerPlants.forEach((powerPlant) => totalGeneratePowerUnit += powerPlant.getGeneratePowerUnit());
        this.solarPanels.forEach((solarPanel) => totalGeneratePowerUnit += solarPanel.getGeneratePowerUnit(dayTime));
        return totalGeneratePowerUnit;
    }

    getUsePowerUnit = (dayTime) => {
        let totalUsePowerUnit = 0;
        this.houses.forEach((house) => totalUsePowerUnit += house.getUsePowerUnit(dayTime));
        return totalUsePowerUnit;
    }

    getPowerDifference = (totalGeneratePowerUnit, totalUsePowerUnit) => {
        totalUsePowerUnit /= 1000;
        const powerDifference = parseFloat((totalGeneratePowerUnit - totalUsePowerUnit).toFixed(3));
        this.powerLine.setTransposedPowerUnit(Math.abs(powerDifference));
        return powerDifference > 0 ? `Можна продати ${powerDifference} мВт` : `Треба купити ${Math.abs(powerDifference)} мВт`;
    }

    calculationCostPurchaseOrSale = () => {
        return this.powerLine.getTransposedPowerUnit() * this.powerLine.getCostOnePowerUnit();
    }

    showElectricNetwork = (dayTime) => {
        const numberPowerPlant = this.powerPlants.length;
        const numberSolarPanel = this.solarPanels.length;
        const numberHouse = this.powerPlants.length;

        const totalGeneratePowerUnit = this.getGeneratePowerUnit(dayTime);
        const totalUsePowerUnit = this.getUsePowerUnit(dayTime);

        const powerDifference = this.getPowerDifference(totalGeneratePowerUnit, totalUsePowerUnit);

        const costPurchaseOrSale = this.calculationCostPurchaseOrSale().toFixed(2);

        return `
         ${dayTime === 'day' ? 'Вдень': ''}${dayTime === 'night' ? 'Вночі': ''} 
        Кількість елекростанцій: ${numberPowerPlant}
        Кількість соннячних панелей: ${numberSolarPanel}
        Кількість будинків: ${numberHouse}
        Загальне виробництво електроенергії: ${totalGeneratePowerUnit} мВт
        Загальне споживання електроенергії: ${totalUsePowerUnit} кВт
        ${powerDifference} на ${costPurchaseOrSale} грн
        `
    }

    calculatePowerDayAndNight = () => {
        console.log(this.showElectricNetwork('day'));
        console.log(this.showElectricNetwork('night'));
    }
}

const electricNetwork = new ElectricNetwork(1, 10, 1000);
electricNetwork.calculatePowerDayAndNight();