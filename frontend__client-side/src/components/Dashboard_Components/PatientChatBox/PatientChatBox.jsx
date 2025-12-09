import { Avatar, Box, Card, Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
// @ts-ignore
import styles from './patientChatBox.module.css'
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import SendIcon from '@mui/icons-material/Send';
import { ProfileCtx } from '../../../context/ProfileCtx';
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../../config/firebase';
// @ts-ignore
import logo from '../../../assets/logo2.png'


const ChatBox = ({ selectedDoctor }) => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    // @ts-ignore
    const { userInfo } = useContext(ProfileCtx);

    // Generate chatId (patientId_doctorId)
        const chatId = selectedDoctor
        ? (userInfo._id < selectedDoctor._id
            ? `${userInfo._id}_${selectedDoctor._id}`
            : `${selectedDoctor._id}_${userInfo._id}`)
        : null;

        useEffect(() => {
        if (!chatId) return;

        const messagesRef = collection(db, "chats", chatId, "messages");
        const q = query(messagesRef, orderBy("timestamp", "asc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMessages(msgs);
        });

        return () => unsubscribe();
    }, [chatId]);

    const handleSend = async () => {
        if (!chatId || newMessage.trim() === "") return;
        const messagesRef = collection(db, "chats", chatId, "messages");
        await addDoc(messagesRef, {
            senderId: userInfo._id,
            text: newMessage,
            timestamp: new Date()
        });
        setNewMessage("");
    };


    return (
        <Box className={styles.chatBox}>
            {
                (!selectedDoctor) ?   
                <Box className={styles.noChatSelected}>
                    <img src={logo} width={130} alt="" />
                    <h5>Select a doctor to start chatting</h5>
                </Box> : (
                <Grid container direction="column">
                    <Grid className={styles.chatBox_header}>
                        <Box className={styles.chatBox_header_txt}>
                            <Avatar alt={selectedDoctor.firstName} src={selectedDoctor.profileImage} sx={{ width: 45, height: 45 }}/>
                            <h6>{selectedDoctor.firstName} {selectedDoctor.lastName}</h6>
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

export default ChatBox;