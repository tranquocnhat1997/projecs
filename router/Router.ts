import {Request, Response} from "express";
import { ContactController } from "../controllers/Controller";


export class Routes {    
    public contactController: ContactController = new ContactController();
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET thanh cong'
            })
        })
        
        // Contact 
        app.route('/contact') 
        .get((req: Request, res: Response) => {     
            res.status(200).send({
                message: 'GET thanh cong'
            })
        })        
        .post((req: Request, res: Response) => {   
            res.status(200).send({
                message: 'POST thanh cong'
            })
        })

        // Contact detail
        app.route('/contact/:contactId')
        .get((req: Request, res: Response) => {          
            res.status(200).send({
                message: 'GET thanh cong'
            })
        })
        .put((req: Request, res: Response) => {         
            res.status(200).send({
                message: 'PUT thanh cong'
            })
        })
        .delete((req: Request, res: Response) => {     
            res.status(200).send({
                message: 'DELETE thanh cong'
            })
        })
        // Create a new contact
        app.route('/contacts')
        .post(this.contactController.addNewContact);
        app.route('/contacts')
        .get(this.contactController.getContacts)
        app.route('/contacts/:contactId')
        .get(this.contactController.getContactWithID)
        app.route('/contacts/:contactId')
        .put(this.contactController.updateContact)
        app.route('/contacts/:contactId')
        .delete(this.contactController.deleteContact)
        
    }
    
}