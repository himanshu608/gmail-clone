import { Button, IconButton } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './sidebar.css'
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoteIcon from '@mui/icons-material/Note';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button onClick={()=>dispatch(openSendMessage())} className="sidebar_compose" startIcon={<AddIcon fontSize='large' />}>
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title={'inbox'} number={56} isSelelected={true} />
            <SidebarOption Icon={StarIcon} title={'Starred'} number={56} isSelelected={false} />
            <SidebarOption Icon={AccessTimeIcon} title={'Snoozed'} number={56} isSelelected={false} />
            <SidebarOption Icon={LabelImportantIcon} title={'Important'} number={56} isSelelected={false} />
            <SidebarOption Icon={NearMeIcon} title={'Sent'} number={56} isSelelected={false} />
            <SidebarOption Icon={NoteIcon} title={'Drafts'} number={56} isSelelected={false} />
            <SidebarOption Icon={ExpandMoreIcon} title={'More'} number={56} isSelelected={false} />

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
