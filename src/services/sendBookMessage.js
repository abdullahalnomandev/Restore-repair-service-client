import { request } from "./httpServices"

export const sendBookMessage={
    postBookMessage:(body)=>request.post('/send_mail',body),
}