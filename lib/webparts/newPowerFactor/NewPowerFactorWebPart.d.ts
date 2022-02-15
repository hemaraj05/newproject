import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface INewPowerFactorWebPartProps {
    description: string;
}
export default class NewPowerFactorWebPart extends BaseClientSideWebPart<INewPowerFactorWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=NewPowerFactorWebPart.d.ts.map