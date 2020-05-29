import { Login } from './login';
import { Products } from './products';

export class Cart {

    id:number;
    customer:Login;
    product:Products;
    amount:number;
    date:Date;
}
