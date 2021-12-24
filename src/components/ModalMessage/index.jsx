import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'

import * as Types from './ModalTypes'

const ModalMessage = ({
    type = 'student',
    display = false,
    setDisplay = () => { }
}) => {
    return (
        <Dialog
            header='Оцените занятие'
            visible={display}
            style={{ width: '50vw' }}
            // footer={renderFooter('displayBasic')}
            onHide={() => setDisplay(false)}
            resizable={false}
            draggable={false}
        >
            {React.createElement(Types[type], {setDisplay})}
        </Dialog>
    )
}

export { ModalMessage }