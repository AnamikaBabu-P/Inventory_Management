import Inventory from '../models/Inventory';
import { CreateInventoryRequest,updateInventoryRequest,InventoryResponse } from '../interfaces/Inventory';


class InventoryService {
    async createInventory (data:CreateInventoryRequest):Promise<InventoryResponse>{
        try{
            const inventory = new Inventory(data);
            const savedInventory = await inventory.save();
            return this.toResponseModel(savedInventory);
        }catch(error){
            throw new Error('Failed to create inventory');
        }
    }

    async getAllInventories(): Promise<InventoryResponse[]> {
        try {
            const inventories = await Inventory.find();
            return inventories.map(this.toResponseModel);
        } catch (error) {
            throw new Error('Failed to retrieve inventories');
        }
    }

    async getInventory(id:string):Promise<InventoryResponse>{
        try{
            const inventory = await Inventory.findById(id);
            if(!inventory) throw new Error('Inventory not found');
            return this.toResponseModel(inventory);
        }catch(error){
            throw new Error('Failed to fetch inventory');
        }
    }

    async updateInventory(id:string,data: updateInventoryRequest):Promise<InventoryResponse>{
        try{
            const inventory = await Inventory.findByIdAndUpdate(id, data, {new:true});
            if(!inventory)throw new Error('Inventory not found');
            return this.toResponseModel(inventory);
        } catch (error){
            throw new Error('Failed to update inventory');
        }
    }

    async deleteInventory(id: string): Promise<void> {
        try{
            const inventory = await Inventory.findByIdAndDelete(id);
            if(!inventory) throw new Error('Inventory not found');
        }catch(error){
            throw new Error('Failed to delete inventory');
        }
    }

    private toResponseModel(inventory: any): InventoryResponse {
        return {
            id: inventory._id.toString(),
            name:inventory.name,
            quantity: inventory.quantity,
            price: inventory.price,
        };
    }
}

export default InventoryService;
