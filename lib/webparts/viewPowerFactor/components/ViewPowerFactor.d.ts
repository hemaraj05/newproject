import * as React from 'react';
import { IViewPowerFactorProps } from './IViewPowerFactorProps';
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export interface IViewPowerFactorState {
    UserPicture: string;
    UserName: string;
    Designation: string;
    Email: string;
    items: any[];
    items2: any[];
    items3: any[];
    selectedOptions: string;
    SelectedInvo: string;
    SelectedValue: string;
    SelectedTo: string;
    SelecInvOrd: string;
    SubjectSelect: string;
    SelectedAddress: string;
    SelectedDate: string;
    SelectedProjectName: string;
    SelectedConsultantName: string;
    SelectedCustomerName: string;
    SelectId: string;
    status: boolean;
    down: boolean;
    Sort: any;
    TotalNoQuantity: number;
    TotalModel: number;
    ListId: string;
    showdata: any[];
    SalesPersonCode: string;
}
export default class ViewPowerFactor extends React.Component<IViewPowerFactorProps, IViewPowerFactorState, {}> {
    private displayData;
    constructor(props: IViewPowerFactorProps, state: IViewPowerFactorState);
    componentDidMount(): void;
    DeleteIcon(): void;
    GetProfile(): Promise<void>;
    private GetCurrentUserName;
    GetDetails(): void;
    appendData(num: any, Invoice: any, Location: any, Project: any, Customer: any, OrderNo: any, Date: any, ItemId: any, CreatedBy: any): void;
    SaveId(Id: any): void;
    DeleteAlert(): void;
    GetDelete(Id: any): Promise<void>;
    StopProcess(): void;
    GetValues(Id: any): void;
    GetModelDetails(value: any): void;
    GetValuesPrint(value: any): void;
    GetModelPrint(value: any): void;
    Location(value: any): void;
    HidePreview(): void;
    SavePrint(): void;
    render(): React.ReactElement<IViewPowerFactorProps>;
}
//# sourceMappingURL=ViewPowerFactor.d.ts.map