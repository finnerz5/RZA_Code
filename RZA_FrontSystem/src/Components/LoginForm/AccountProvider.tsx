import { ReactNode, createContext } from "react";
import UseAccountCredentials, { AccountCredentialsContextType } from "./UseAccountCreds";



export const AccountCredentialsContext = createContext<AccountCredentialsContextType | null>(null);

/* This function `AccountCredentialsProvider` is a React component that serves as a provider for the
`AccountCredentialsContext`. It takes in a prop `children` which is of type `ReactNode`,
representing the child components that will be wrapped by this provider. Inside the component, it
uses the `AccountCredentialsContext.Provider` component to provide the `accountCredentials` value
obtained from the `UseAccountCredentials` hook to its children components. This allows the child
components to access the `accountCredentials` data from the context provided by this provider. */
function AccountCredentialsProvider({children}: {children: ReactNode}) {
    const accountCredentials = UseAccountCredentials();

    return(
        <AccountCredentialsContext.Provider value={accountCredentials}>
            {children}
        </AccountCredentialsContext.Provider>
    )
}

export default AccountCredentialsProvider;