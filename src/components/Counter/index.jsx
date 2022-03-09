import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Counter(props) {
    const [count, setCount] = useState(0)

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(x => x + 2)}>Increase</button>
        </>
    )
}

Counter.propTypes = {

}

export default Counter

