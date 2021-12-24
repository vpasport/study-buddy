import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { SpeedDial } from 'primereact/speeddial'

import { BsChatLeftText } from 'react-icons/bs'
import { GrNotes } from 'react-icons/gr'
import { FiMic, FiMessageSquare, FiTrello, FiUser } from 'react-icons/fi'

import { Chat, Notes, Board } from '../../components'

import styles from './style.module.scss'

const Main = () => {
    const [visableChat, setVisableChat] = useState(false)
    const [visableNotes, setVisableNotes] = useState(false)

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            // command: () => {
            //     toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            // }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            // command: () => {
            //     toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            // }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            // command: () => {
            //     toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            // }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];

    const [boardActivated, setBoardActivated] = useState(false);

    return (
        <div>
            <div
                className={styles.main}
                style={!boardActivated ? { height: '100vh' } : {height: 0}}
            >
                <Sidebar visible={visableChat} className={styles.chat} onHide={() => setVisableChat(false)}>
                    <Chat />
                </Sidebar>

                <Sidebar visible={visableNotes} className={styles.notes} position="right" onHide={() => setVisableNotes(false)}>
                    <Notes />
                </Sidebar>

                <div className={styles.header}>
                    <p>Ученик: Пасортников Вячеслав</p>
                </div>

                <div className={styles.webcams}>
                    <div className={styles.webcam}>
                        <div>
                            <FiUser size='50%' color='white' />
                        </div>
                    </div>
                    <div className={styles.webcam}>
                        <div>
                            <FiUser size='50%' color='white' />
                        </div>
                    </div>
                </div>

                <div className={styles.tools_bar}>
                    <Button onClick={() => setVisableChat(true)} className={styles.button}>
                        <FiMessageSquare />
                    </Button>

                    <div className={styles.central_tools_bar}>
                        <FiMic size={25} color='#2196F3' />
                        <Button className={styles.button} onClick={() => setBoardActivated(true)}>
                            <FiTrello />
                        </Button>
                        <div className={styles.dial_container}>
                            <SpeedDial model={items} direction="up" transitionDelay={80} showIcon='pi pi-sliders-h' hideIcon='pi pi-times' className={styles.dial} ></SpeedDial>
                        </div>
                        <Button className={`p-button-danger ${styles.exit_button}`}>
                            Завершить занятие
                        </Button>
                    </div>

                    <Button onClick={() => setVisableNotes(true)} className={styles.button}>
                        <GrNotes />
                    </Button>
                </div>
            </div>
            <Board
                className={styles.miro}
                close={() => setBoardActivated(false)}
                style={boardActivated ? { height: '100vh' } : {}}
            />
        </div>
    )
}

export { Main }