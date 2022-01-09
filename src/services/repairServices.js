import { request } from "./httpServices"

export const repairServices={
    getProduct:()=>request.get('/services'),
    postProduct:(body)=>request.post('/service',body),
    deleteProduct:(id)=>request.delete(`/delete/${id}`),
    updateProduct:(id,body)=>request.patch(`/service/${id}`,body)
}