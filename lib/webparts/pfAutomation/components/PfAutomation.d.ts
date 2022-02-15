import * as React from 'react';
import { IPfAutomationProps } from './IPfAutomationProps';
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
export interface IStates {
    UserPicture: string;
    UserName: string;
    Designation: string;
}
export default class PfAutomation extends React.Component<IPfAutomationProps, IStates, {}> {
    constructor(props: IPfAutomationProps, state: IStates);
    handleClick: () => void;
    componentDidMount(): void;
    GetProfile(): Promise<void>;
    private GetCurrentUserName;
    render(): React.ReactElement<IPfAutomationProps>;
}
//# sourceMappingURL=PfAutomation.d.ts.map