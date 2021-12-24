import React, { useState } from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import Emojis from 'react-emoji-component'

import styles from './style.module.scss'


const smilesV2 = ['😠', '😞', '🤨', '🙂', '🤓']

const Student = ({
    setDisplay = () => { }
}) => {
    const [rating, setRating] = useState(false)

    return rating ?
        <div>
            <h3>Вы можете оставить отзыв о работе преподавателя:</h3>
            <InputTextarea className={styles.input} />
            <div className={styles.button_container}>
                <Button label='Оставить отзыв' onClick={() => setDisplay(false)} />
            </div>
        </div>
        :
        <div>
            <h3>Как вы можете оценить занятие у этого преподавателя?</h3>
            <div className={styles.smiles}>
                {smilesV2.map((el) =>
                    <div className={styles.smile} onClick={() => setRating(true)}>
                        <Emojis size={64}>{el}</Emojis>
                    </div>
                )}
            </div>
        </div>

}

export { Student }