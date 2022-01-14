import { request } from "./httpServices"

export const bookingService={
    getAllBooking:()=>request.get('/allBookings'),
    getBooking:(email)=>request.get(`/bookings?email=${email}`),
    postBooking:(body)=>request.post('/booking',body),
    deleteBooking:(id)=>request.delete(`/deleteBooking/${id}`),
    updateBooking:(id,body)=>request.patch(`/bookStatus/${id}`,body)
}