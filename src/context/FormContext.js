import { createContext, useState, useEffect } from "react";

const FormContext = createContext({})

export const FormProvider = ({children}) => {
    return (
        <FormContext.Provider value={{}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext