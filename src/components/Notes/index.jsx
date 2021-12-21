import React from 'react'

import { Checkbox } from 'primereact/checkbox'

import styles from './style.module.scss'

const Notes = () => {
    return (
        <div className={`p-sidebar-content ${styles.notes_container}`}>
            <h3>Notes</h3>
            <div className={styles.notes_content}>
                <div className="p-field-checkbox">
                    <Checkbox inputId="1" checked={true} />
                    < label htmlFor="1">Повторить отределения</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="2" />
                    <label htmlFor="2">Дать задание</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="3" />
                    <label htmlFor="3">Рассказать теорию</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="4" />
                    <label htmlFor="4">Показать решение задач</label>
                </div>
                <div className="p-field-checkbox">
                    <Checkbox inputId="5" />
                    <label htmlFor="5">Дать домашнее задание</label>
                </div>
            </div>
        </div>
    )
}

export { Notes }