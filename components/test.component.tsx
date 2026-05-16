type WhatIExpect = {
    lol?: any
}

export default function Test(props: WhatIExpect) {
    return (
        <div>
            <p>very epic<br />{ props.lol || "lol" }</p>
        </div>
    )
}