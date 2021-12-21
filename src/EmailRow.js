import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './emailrow.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';
function EmailRow({id, title, subject,description,time}) {
    const history = useHistory();
    const dispatch = useDispatch();
    function openMail() {
        dispatch(
            selectMail(
                {id, title, subject,description,time}
            )
        )
        history.push('/mail');
    }
    return (
        <div className="emailrow" onClick={openMail} >
            <div className="emailrow_option">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className="emailrow_title" onClick={()=>history.push('/mail')}>
               {title}
            </div>
            <div className="emailrow_msg" onClick={()=>history.push('/mail')}>
                <h4>{subject}
                {"  "}
                <span className="emailrow_desc">{description}</span>
                </h4>
            </div>
            <div className="emailrow_time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
