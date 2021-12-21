import { IconButton } from '@mui/material'
import React from 'react'
import './mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import SnoozeIcon from '@mui/icons-material/Snooze';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useHistory } from 'react-router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PrintIcon from '@mui/icons-material/Print';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
function Mail() {
    const history = useHistory();
    const openedMail = useSelector(selectOpenMail);

    console.log(openedMail)
    return (
        <div className="mail">
            <div className="mail_header">
                <div className="mail_headerLeft">
                    <IconButton onClick={()=>history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>
                    <IconButton>
                        <ReportIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <SnoozeIcon />
                    </IconButton>
                    <IconButton>
                        <LabelIcon />
                    </IconButton>
                    <IconButton>
                    <CheckCircleIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail_headerRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="mail_body">
                <div className="mail_body_header">

                    <div className="mail_body_header_left">
                    <h3>{openedMail?.subject}</h3>
                    <IconButton onClick={(e)=>{e.target.style.color === 'gold'?e.target.style.color='black':e.target.style.color='gold'}}>
                     <LabelImportantIcon/>
                    </IconButton>
                    <h3>{openedMail?.title}</h3>
                    </div>
                    <div className="mail_body_header_right">
                    <section>{openedMail?.time}</section>
                    <IconButton>
                     <StarIcon/>
                    </IconButton>
                    <IconButton>
                     <ReplyIcon/>
                    </IconButton>
                    <IconButton>
                     <MoreVertIcon/>
                    </IconButton>
                    </div>
                </div>

                <div className="mail_body_message">
                    <h3>{openedMail?.description}</h3>
                </div>
            </div>
        </div>
    )
}

export default Mail
