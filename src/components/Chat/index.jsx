import React from 'react'

import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

import { FiSend } from "react-icons/fi";

import styles from './style.module.scss'

const Chat = () => {
    return (
        <div className={`p-sidebar-content ${styles.chat_container}`}>
            <h3>Chat</h3>
            <div className={styles.chat_content}>
                <div className={styles.message_for_me}>
                    <div className={styles.message}>
                        <p>Здравствуйте, во сколько сегодня начинаем?</p>
                        <p className={styles.message_time}>11:20</p>
                    </div>
                </div>
                <div className={styles.message_my}>
                    <div className={styles.message}>
                        <p>Приветствую, как обычно</p>
                        <p className={styles.message_time}>11:20</p>
                    </div>
                </div>
            </div>
            <div className="p-inputgroup">
                <InputTextarea className={styles.chat_input} placeholder='message' />
                <Button><FiSend size={25} /></Button>
            </div>
        </div>
    )
}

export { Chat }