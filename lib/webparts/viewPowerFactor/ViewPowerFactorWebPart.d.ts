import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IViewPowerFactorWebPartProps {
    description: string;
}
export default class ViewPowerFactorWebPart extends BaseClientSideWebPart<IViewPowerFactorWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ViewPowerFactorWebPart.d.ts.map