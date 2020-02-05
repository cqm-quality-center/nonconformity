export class Barcode {
    public _id: string;
    public partName: string;
    public partModel: string;
    public partCode: number;
    public partProduction: string;

    constructor(_id: string, partName: string, partModel: string, partCode: number, partProduction: string) {
        this._id = _id;
        this.partName = partName;
        this.partModel = partModel;
        this.partCode = partCode;
        this.partProduction = partProduction;
    }
}