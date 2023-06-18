import { createContext, useState } from "react"

export const SecurityCodesContext = createContext()

const ContextProvider = ({children}) => {
    const [error, setError] = useState(true)

    return (
        <SecurityCodesContext.Provider 
        value={{
            error,
            setError,
            }}>
                {children}
        </SecurityCodesContext.Provider>
    )
}

export default ContextProvider