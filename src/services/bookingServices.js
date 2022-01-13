import { request } from "./httpServices"

export const bookingService={
    getBooking:(email)=>request.get(`/bookings?email=${email}`),
    postBooking:(body)=>request.post('/booking',body),
    deleteBooking:(id)=>request.delete(`/delete/${id}`),
    updateBooking:(id,body)=>request.patch(`/service/${id}`,body)
}