
import { Request,Response } from "express";
import InventoryService from "../services/InventoryService";

class InventoryController {
    constructor(private inventoryService: InventoryService){}

    createInventory = async (req: Request, res: Response): Promise<void> => {
        try {
            console.log(req.body); 
            const inventory = await this.inventoryService.createInventory(req.body);
            res.redirect('/');
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }
    

    newInventory = async(req: Request,res: Response): Promise<void> =>{
        res.render('new')
    }

    getAllInventory = async(req: Request,res: Response): Promise<void> =>{
        try {
        const inventories = await this.inventoryService.getAllInventories();
        console.log(inventories,'invjfffffffffffffffff');
        
        res.render('index',{inventories});
        } catch (error) {
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
        try{
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
            res.redirect('/');
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