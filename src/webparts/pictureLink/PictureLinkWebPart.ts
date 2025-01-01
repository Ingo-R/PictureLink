import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration
} from '@microsoft/sp-webpart-base';
import * as strings from 'PictureLinkWebPartStrings';
import PictureLink from './components/PictureLink';
import { IPictureLinkProps } from './components/IPictureLinkProps';
import {PropertyFieldTextWithCallout} from "@pnp/spfx-property-controls";
import {CalloutTriggers} from "@pnp/spfx-property-controls/lib/common/callout";
export interface IPictureLinkWebPartProps {
  beschreibung: string;
  name: string;
  linkBild: string;
  linkZiel: string;
}
export default class PictureLinkWebPart extends BaseClientSideWebPart<IPictureLinkWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IPictureLinkProps> = React.createElement(
      PictureLink,
      {
        beschreibung: this.properties.beschreibung,
        name: this.properties.name,
        linkBild: this.properties.linkBild,
        linkZiel: this.properties.linkZiel,
        configured: this.properties.linkBild ? this.properties.linkBild != '' : false,
        context: this.context
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
                PropertyFieldTextWithCallout('name', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'textInfoHeaderFieldId',
                  label: 'Name des Links',
                  calloutContent: React.createElement('span', {}, 'Anzeigename'),
                  calloutWidth: 150,
                  value: this.properties.name
                }),
                PropertyFieldTextWithCallout('linkBild', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'textInfoHeaderFieldId',
                  label: 'URL des Bildes',
                  calloutContent: React.createElement('span', {}, 'Vollständige URL des Bildes'),
                  calloutWidth: 150,
                  value: this.properties.linkBild
                }),
                PropertyFieldTextWithCallout('linkZiel', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'textInfoHeaderFieldId',
                  label: 'Ziel URL',
                  calloutContent: React.createElement('span', {}, 'URL die erreicht werden soll'),
                  calloutWidth: 150,
                  value: this.properties.linkZiel
                }),
                PropertyFieldTextWithCallout('beschreibung', {
                  calloutTrigger: CalloutTriggers.Hover,
                  key: 'textInfoHeaderFieldId',
                  label: 'Beschreibungstext',
                  calloutContent: React.createElement('span', {}, 'Kurze Erklärung des Textes'),
                  calloutWidth: 150,
                  multiline: true,
                  value: this.properties.beschreibung
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
