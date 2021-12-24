import React, { useState } from 'react';

import { FiUser, FiMaximize, FiMic } from 'react-icons/fi'

import styles from './style.module.scss';

const Board = ({
    close = () => { },
    className = '',
    style = {}
}) => {
    const [exitColor, setExitColor] = useState('white')

    return (
        <div
            className={`${styles.boardContainer} 
            ${className}`}
            style={{
                ...style
            }}
        >
            <div className={styles.webcam}>
                <div>
                    <FiUser size='50%' color='white' />
                </div>
                <FiMaximize
                    size={30}
                    color={exitColor}
                    className={styles.exit_button}
                    onMouseEnter={() => setExitColor('#2196F3')}
                    onMouseLeave={() => setExitColor('white')}
                    onClick={close}
                />
                <FiMic
                    color='#2196F3'
                    size={25}
                    className={styles.webcam_mic}
                />
            </div>
            <iframe
                title="MiroBoard"
                src="https://miro.com/app/live-embed/uXjVOalBSi8=/?moveToViewport=-23165,-5837,13803,7546"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                style={{
                    height: '120%'
                }}
            />
        </div>
    )
}

export { Board };
