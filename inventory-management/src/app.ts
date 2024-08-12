import express from "express";
import mongoose from "mongoose";
import inventoryRoutes from './routes/InventoryRoutes';
import path from 'path';
import methodOverride from 'method-override';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/',inventoryRoutes);

const PORT = process.env.PORT || 8000;
const MONGODB_URI = 'mongodb://localhost:27017/inventory-management';

mongoose 
.connect(MONGODB_URI)
.then(()=>{
    console.log('connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
        
    });
}).catch((error)=>{
    console.log('Failed to connect to MongoDB', error);
    
})
