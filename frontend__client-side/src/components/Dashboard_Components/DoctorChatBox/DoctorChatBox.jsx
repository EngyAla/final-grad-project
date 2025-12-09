import { Avatar, Box, Card, Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
// @ts-ignore
import styles from './doctorChatBox.module.css'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import SendIcon from '@mui/icons-material/Send';
// import { ProfileCtx } from '../../context/ProfileCtx';
// import {doctorsData} from '../../pages/Doctors_Directory/filterdata'
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../../config/firebase';
// @ts-ignore
import logo from '../../../assets/logo2.png'
import { ProfileCtx } from '../../../context/ProfileCtx';

const DoctorChatBox = ({ selectedPatient }) => {

    // @ts-ignore
    const { userInfo } = useContext(ProfileCtx);
    // console.log(userInfo)
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const chatId = selectedPatient
    ? (userInfo._id < selectedPatient._id
        ? `${userInfo._id}_${selectedPatient._id}`
        : `${selectedPatient._id}_${userInfo._id}`)
    : null;

        useEffect(() => {
            if (!chatId) return;

            const messagesRef = collection(db, "chats", chatId, "messages");
            const q = query(messagesRef, orderBy("timestamp", "asc"));

            const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
            setMessages(msgs);

            });

            return () => unsubscribe();
        }, [chatId]);

        const handleSend = async () => {
            if (!chatId || newMessage.trim() === "") return;

            const messagesRef = collection(db, "chats", chatId, "messages");

            await addDoc(messagesRef, {
            senderId: userInfo._id,
            receiverId: selectedPatient._id,
            text: newMessage,
            timestamp: new Date(),
            });

            setNewMessage("");
        };

    return (
        <Box className={styles.chatBox}>
            {
                (!selectedPatient) ?   
                <Box className={styles.noChatSelected}>
                    <img src={logo} width={130} alt="" />
                    <h5>Select a patient to start chatting</h5>
                </Box> : (
                <Grid container direction="column">
                    <Grid className={styles.chatBox_header}>
                        <Box className={styles.chatBox_header_txt}>
                            <Avatar alt={selectedPatient.firstName} src={selectedPatient.profileImage} sx={{ width: 45, height: 45 }}/>
                            <h6>{selectedPatient.firstName} {selectedPatient.lastName}</h6>
                        </Box>
                        <InfoOutlineIcon sx={{fontSize: "22px", color: "#767676ff", cursor: "pointer"}}/>
                    </Grid>

                    <Grid className={styles.msg_container}>
                        {messages.map(msg => (
                            <Box
                                key={msg.id}
                                className={msg.senderId === userInfo._id ? `${styles.sender_msg}` : `${styles.receiver_msg}`}
                            >
                                <p>{msg.text}</p>
                                <p>{new Date(msg.timestamp.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </Box>
                        ))}
                    </Grid>

                    <Grid className={styles.chatBox_footer}>
                        <input
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                            onKeyUp={(e) => { if(e.key === "Enter") handleSend(); }}
                            type="text" placeholder='Type your message here...' />
                        <Box className={styles.send_btn_container} onClick={handleSend}>
                            <SendIcon />
                        </Box>
                    </Grid>
                </Grid>
                )
            }
            
        </Box>
    )
}

export default DoctorChatBox;