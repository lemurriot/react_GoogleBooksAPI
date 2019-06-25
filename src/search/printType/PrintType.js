import React from 'react'

export default function PrintType(props) {
    const options = ['all', 'books', 'magazines']
    const optionsList = options.map((option, i) => <option key={i} value={option} id={option}>{option}</option>)
    return (    
        <form action="">
            <label htmlFor="printtype_options">Filter Print Types</label>
            <select name="printtype_options" id="printtype_options" value={props.printType} onChange={e => props.onPrintTypeChange(e.target.value)}>
                {optionsList}
            </select>
        </form>
    )
}
