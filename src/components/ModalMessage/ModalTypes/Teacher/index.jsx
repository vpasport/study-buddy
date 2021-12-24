import React, { useMemo, useState } from 'react'
import Emojis from 'react-emoji-component'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

import styles from './style.module.scss'


const smilesV2 = ['😠', '😞', '🤨', '🙂', '🤓']

const Teacher = ({
    setDisplay = () => { }
}) => {
    const [view, setView] = useState(0)

    const views = useMemo(() => ([
        <div>
            <h3>Статискика занятия:</h3>
            <p>Занятие длилось 1 час 13 минут</p>
            <p>За время занятия ученик смотрел на экран 90% времени, выглядел задумчивым</p>
        </div>,
        <div>
            <h3>Как вы можете оценить занятие с этим учеником?</h3>
            <div className={styles.smiles}>
                {smilesV2.map((el) =>
                    <div className={styles.smile} onClick={() => setView(prev => prev + 1)}>
                        <Emojis size={64}>{el}</Emojis>
                    </div>
                )}
            </div>
        </div>,
        <div>
            <h3>Вы можете оставить отзыв о работе ученика:</h3>
            <InputTextarea className={styles.input} />
            <div className={styles.button_container}>
                <Button label='Оставить отзыв' onClick={() => setDisplay(false)} />
            </div>
        </div>
    ]), [])

    return views[view]
}

export { Teacher }