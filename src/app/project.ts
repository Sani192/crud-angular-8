import { ClientLocation } from './client-location';
export class Project {

  projectId: number;
  projectName: string;
  dateOfStart: string;
  teamSize: number;
  active: boolean;
  status: string;
  clientLocationId: number;
  clientLocation: ClientLocation = new ClientLocation();

  constructor() {
    this.projectId = 0;
    this.projectName = null;
    this.dateOfStart = null;
    this.teamSize = 0;
    this.active = true;
    this.status = null;
    this.clientLocationId = null;
    this.clientLocation = new ClientLocation();
  }
}
