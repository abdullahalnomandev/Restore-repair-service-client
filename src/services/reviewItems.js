import { request } from "./httpServices"

export const clientsReview={
    getReview:()=>request.get('/reviews'),
    postReview:(body)=>request.post('/review',body),
    deleteReview:(id)=>request.delete(`/delete/${id}`),
    updateReview:(id,body)=>request.patch(`/review/${id}`,body)
}