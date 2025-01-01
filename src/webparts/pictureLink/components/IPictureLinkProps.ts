import {WebPartContext} from "@microsoft/sp-webpart-base";

export interface IPictureLinkProps {
  beschreibung: string;
  name: string;
  linkBild: string;
  linkZiel: string;
  configured: boolean;
  context: WebPartContext;


}
