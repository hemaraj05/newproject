import * as React from 'react';
import { IAdminPortalProps } from './IAdminPortalProps';
import "@pnp/sp/profiles";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/folders";
import "@pnp/sp/files";
export interface IAdminPortalState {
    UserPicture: string;
    UserName: string;
    Designation: string;
    Email: string;
    SelectedFileName: string;
}
export default class AdminPortal extends React.Component<IAdminPortalProps, IAdminPortalState, {}> {
    private textInput;
    constructor(props: IAdminPortalProps, state: IAdminPortalState);
    componentDidMount(): void;
    private GetCurrentUserName;
    ShowUpload: () => void;
    ShowBulk: () => void;
    SuccessModel(): void;
    OkAlert(): void;
    OkBulkAlert(): void;
    UploadFiletoDocumentLibrary(): Promise<void>;
    private SaveUpload;
    ValidateFile(FileName: any): boolean;
    ErrorValidation(): boolean;
    render(): React.ReactElement<IAdminPortalProps>;
}
//# sourceMappingURL=AdminPortal.d.ts.map