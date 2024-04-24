import { ReactNode, createContext } from "react";
import UseAccountCredentials, { AccountCredentialsContextType } from "./UseAccountCreds";



export const AccountCredentialsContext = createContext<AccountCredentialsContextType | null>(null);

function AccountCredentialsProvider({children}: {children: ReactNode}) {
    const accountCredentials = UseAccountCredentials();

    return(
        <AccountCredentialsContext.Provider value={accountCredentials}>
            {children}
        </AccountCredentialsContext.Provider>
    )
}

export default AccountCredentialsProvider;