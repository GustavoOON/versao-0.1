import React from 'react'

function MonthYear() {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()

    const monthName = {
        0: 'Janeiro',
        1: 'Fevereiro',
        2: 'Março',
        3: 'Abril',
        4: 'MAio',
        5: 'Junho',
        6: 'Julho',
        7: 'Agosto',
        8: 'Setembro',
        9: 'Outubro',
        10: 'Novembro',
        11: 'Dezembro',
    };
  return (
    <label>{monthName[month]} {year}</label>
  )
}

export default MonthYear;
