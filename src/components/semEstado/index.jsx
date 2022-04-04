import React from 'react'

const styles = {
    juninho: {
        fontSize: 48,
        color: 'blue',
        textAlign: 'center',
    }
}

export const HelloSemEstado = ({name}) => <h3 style={styles.juninho}>Olá SEM ESTADO, {name}</h3>

