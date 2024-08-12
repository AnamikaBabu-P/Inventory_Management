
export interface CreateInventoryRequest{
    name: String;
    quantity: number;
    price: number;
}


export interface updateInventoryRequest {
    name?: string;
    quantity?: number;
    price?: number;
}

export interface InventoryResponse {
    id: string;
    name: string;
    quantity: number;
    price: number;
}