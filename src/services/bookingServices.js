import { request } from "./httpServices"

export const repairServices={
    getBooking:()=>request.get('/services'),
    postBooking:(body)=>request.post('/booking',body),
    deleteBooking:(id)=>request.delete(`/delete/${id}`),
    updateBooking:(id,body)=>request.patch(`/service/${id}`,body)
}