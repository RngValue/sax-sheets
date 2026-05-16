type WhatIExpect = {
    lol?: any
}

export default function Test(props: WhatIExpect) {
    return (
        <p>very epic { props.lol || "lol" }</p>
    )
}