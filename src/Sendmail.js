import { Button, IconButton } from '@mui/material'
import React from 'react'
import './sendmail.css'
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form'
import {closeSendMessage} from './features/mailSlice'
import { useDispatch } from 'react-redux';
import {db} from './Firebase'
import { collection, addDoc,serverTimestamp} from "firebase/firestore"; 

function Sendmail() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    function Submit(data) {
        console.log(data);
        try {
             addDoc(collection(db, "emails"), {
              to:data.to,
              subject:data.subject,
              message:data.message,
              timestamp:serverTimestamp()
            });
            console.log("email sent");
          } catch (e) {
            console.error("Error sending mail: ", e);
          }
          dispatch(closeSendMessage())
    }
    return (
        <div className="Sendmail">
            <div className="Sendmail_header">
                <h3>new message</h3>
                <IconButton onClick={()=>dispatch(closeSendMessage())} sx={{ color: 'white' }} >
                    <CloseIcon />
                </IconButton>
            </div>

            <div className="Sendmail_form" onSubmit={handleSubmit(Submit)}>
                <form>
                    <input {...register('to', { required: true })} name="to" type="email" placeholder="To" />
                    <input {...register('subject', { required: true })} name="subject" type="text" placeholder="Subject" />
                    <input {...register('message', { required: true })} name="message" type="text" placeholder="Message.." className="Sendmail_message_input" />

                    <div className="Sendmail_options">
                        <Button type="submit" className="Sendmail_button">Send</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Sendmail
