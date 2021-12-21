
import { IconButton, Checkbox } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './emaillist.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedoIcon from '@mui/icons-material/Redo'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide'
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import { collection, getDocs, doc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./Firebase"

function EmailList() {

    const [emails, setEmails] = useState([]);
    useEffect(async () => {
        var newEmail = []
        const q = query(collection(db, "emails"), orderBy('timestamp', 'desc'));
        const unsubscribe =  onSnapshot(q, (querySnapshot) => {
            setEmails(querySnapshot.docs.map(doc=>({
                        id: doc.id,
                        data: {
                            to: doc.data().to,
                            message: doc.data().message,
                            subject: doc.data().subject,
                            timestamp: `${doc.data().timestamp.toDate().getDate()}/${doc.data().timestamp.toDate().getMonth() + 1}/${doc.data().timestamp.toDate().getFullYear()}  ${doc.data().timestamp.toDate().getHours() % 12<9?'0'+doc.data().timestamp.toDate().getHours() % 12:doc.data().timestamp.toDate().getHours() % 12}:${doc.data().timestamp.toDate().getMinutes()} ${doc.data().timestamp.toDate().getHours() < 12 ? 'am' : 'pm'}`,
                        },
                    })))
        });
    }, [])
    return (
        <div className="emailList">
            <div className="emailList_setting">
                <div className="emailList_settingLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList_settingRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>

                </div>
            </div>

            <div className="emailList_section">
                <Section Icon={InboxIcon} title="Primary" selected={true} color="red"></Section>
                <Section Icon={PeopleIcon} title="Social" selected={false} color="green"></Section>
                <Section Icon={LocalOfferIcon} title="Promotions" selected={false} color="blue"></Section>
            </div>

            <div className="emailList__Lists">

                {emails &&
                    emails.map((email) => (
                        <EmailRow id={email.id} title={email.data.to} subject={email.data.subject} description={email.data.message} time={email.data.timestamp} key={email.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default EmailList
