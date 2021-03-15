import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Nhap ten'
    },
    lastName: {
        type: String,
        required: 'Nhap ho'
    },
    email: {
        type: String            
    },
    phone: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});