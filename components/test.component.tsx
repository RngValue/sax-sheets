type WhatIExpect = {
    lol?: any
}

export default function Test(props: WhatIExpect) {
    return (
        <p className="text-center pb-6">very epic { props.lol || "lol" }</p>
    )
}