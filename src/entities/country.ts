
export default class Country {
    
    private currency: string;
    private conversionRate: number;
    private countryName: string;
    private countryCode: string;
    private countryFlag: string;
    private countryShortForm: string;

    constructor() {
        this.currency = '';
        this.conversionRate = 0;
        this.countryName = '';
        this.countryCode = '';
        this.countryFlag = '';
        this.countryShortForm = '';
    }

    public setCountryName(countryName: string) {
        this.countryName = countryName;
    }

    public setCountryCurrency(currency: string) {
        this.currency = currency;
    }

    public setConversionRate(conversionRate: number) {
        this.conversionRate = conversionRate
    }
}