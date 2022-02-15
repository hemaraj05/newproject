import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PfAutomationWebPartStrings';
import PfAutomation from './components/PfAutomation';
import { IPfAutomationProps } from './components/IPfAutomationProps';

export interface IPfAutomationWebPartProps {
  description: string;
}

export default class PfAutomationWebPart extends BaseClientSideWebPart<IPfAutomationWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPfAutomationProps> = React.createElement(
      PfAutomation,
      {
        description: this.properties.description,
        siteurl: this.context.pageContext.web.absoluteUrl

      }
    );

    ReactDom.render(element, this.domElement);

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
