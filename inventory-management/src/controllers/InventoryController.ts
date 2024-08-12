
import { Request,Response } from "express";
import InventoryService from "../services/InventoryService";

class InventoryController {
    constructor(private inventoryService: InventoryService){}

    createInventory = async (req: Request, res: Response): Promise<void> =>{
        try{
            const inventory = await this.inventoryService.createInventory(req.body);
            res.status(201).json(inventory);
        }catch (error){
            if(error instanceof Error){
                res.status(500).json({message: error.message});
            }else {
                res.status(500).json({ message: 'An unknown error occurred' });
            }
            
        }
    }


    getInventory = async(req: Request,res: Response): Promise<void> =>{
        console.log('llllllllllllllllllll');
        
        try{
            console.log('jkldssdds');
            console.log(req.params.id,'rrrrrrrrrrrrrrrrrr');
            
            
            const inventory = await this.inventoryService.getInventory(req.params.id);
            res.render('edit',{inventory})
        }catch (error) {
            if(error instanceof Error){
                res.status(500).json({message: error.message});
            }else {
                res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }



    updateInventory = async (req: Request,res: Response): Promise<void> => {
        console.log('trrrrrrrrrrrrrrrrrrr');
        
        try{
            console.log('sssssssssss');
            console.log(req.params.id,'ttttttttt');
            
            console.log(req.body,'rrrrrrrrrr');
            
            const inventory = await this.inventoryService.updateInventory(req.params.id, req.body);
            res.redirect('/')
        }catch (error) {
            if(error instanceof Error){
                res.status(500).json({message: error.message});
            }else {
                res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }

    deleteInventory = async (req: Request,res: Response): Promise<void> =>{
        try{
            await this.inventoryService.deleteInventory(req.params.id);
            res.status(204).send();
        }catch (error) {
            if(error instanceof Error){
                res.status(500).json({message: error.message});
            }else {
                res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }
}

export default InventoryController;