import { Schema,model } from "mongoose";

interface IInventory {
    name: string;
    quantity: number;
    price: number;
}

const inventorySchema = new Schema<IInventory>({
    name:{ type:String,required:true},
    quantity:{type:Number,required:true},
    price:{type:Number,required:true},
});

const Inventory = model<IInventory>('Inventory',inventorySchema);
export default Inventory;