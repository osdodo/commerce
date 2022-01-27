import { useState, useEffect } from 'react'

const signList = [
    "Press <span class='p-1 px-2 bg-yellow-400 rounded'>/</span> to start cursor chat",
    "Press <span class='p-1 px-2 bg-yellow-400 rounded'>ESC</span> to close the input box",
]

const CursorChatTip = () => {
    const [currentSign, setCurrentSign] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSign(index => (index === signList.length - 1 ? 0 : index + 1))
        }, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <p
            className='z-50 fixed bottom-12 left-0 px-5 py-2 bg-white text-black opacity-70'
            dangerouslySetInnerHTML={{
                __html: signList[currentSign]
            }}
        />
    )
}

export default CursorChatTip
