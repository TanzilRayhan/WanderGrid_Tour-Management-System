import { Injectable } from "@nestjs/common";
@Injectable()
export class CustomerService {
    getCustomer(): string {
        return "Customer data";
    }

    getCustomerById(id: string): string {
        return `Customer data for ID: ${id}`;
    }

    getPhotoService(photoId: string): string {
        return `Customer photo for ID: ${photoId}`;
    }

    createPhoto(): string {
        return 'Customer photo created';
    }
}