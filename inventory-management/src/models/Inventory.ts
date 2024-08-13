import { Schema,model } from "mongoose";

interface IInventory {
    name: string;
    quantity: number;
    price: number;
    description: string;
}

const inventorySchema = new Schema<IInventory>({
    name:{ type:String,required:true},
    quantity:{type:Number,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true}
});

const Inventory = model<IInventory>('Inventory',inventorySchema);
export default Inventory;