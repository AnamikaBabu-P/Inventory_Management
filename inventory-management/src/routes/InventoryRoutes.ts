import { Router } from 'express';
import InventoryController from '../controllers/InventoryController';
import InventoryService from '../services/InventoryService';


const router = Router();
const inventoryService = new InventoryService();
const inventoryController = new InventoryController(inventoryService);

router.get('/',async (req,res)=>{
    try{
        const inventories = await inventoryService.getAllInventories();
        res.render('index',{inventories});
    }catch(error){
        res.status(500).send('Failed to load inventory list');

    }
})

router.get('/inventory/new', (req,res)=>{
    res.render('new');
});

router.post('/inventory',inventoryController.createInventory);

// router.get('/inventory/:id/edit',inventoryController.getInventory);
router.get('/inventory/:id',inventoryController.getInventory);
router.put('/inventory/:id',inventoryController.updateInventory);
router.delete('/inventory/:id',inventoryController.deleteInventory);

export default router;