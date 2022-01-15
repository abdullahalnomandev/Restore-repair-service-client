import { request } from "./httpServices"

export const manageAdmin={
    getAllAdmin:()=>request.get('/allAdmin'),
    checkAdmin:(email)=>request.get(`/checkAdmin/${email}`),
    postAdmin:(body)=>request.post('/admin',body),
    deleteAdmin:(id)=>request.delete(`/deleteAdmin/${id}`),
}