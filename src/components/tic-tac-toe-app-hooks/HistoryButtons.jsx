import React from 'react'

function HistoryButton({className, text, jumpTo}) {

    return (
        <li className={className} onClick={jumpTo}> {text}</li>
    )
}

export default HistoryButton
