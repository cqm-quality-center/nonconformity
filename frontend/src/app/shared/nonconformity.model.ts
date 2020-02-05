export class Nonconformity {
    constructor(public mark: string, public part: string, public um: string, public amount: number, public remark: string, 
                public imagePath: string, public detail: string, public position?: string, public disposition?: string[],
                public barcodePartModel?: string, public barcodePartName?: string, public barcodeProductionDate?: string) {
    }
}