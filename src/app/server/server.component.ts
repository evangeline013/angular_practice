import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
      .online {
        color: white;
      }
    `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.serverStatus = 'online';
    }, 2000);
    setTimeout(() => {
      this.serverStatus = 'offline';
    }, 4000);
  }

  getServiceStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
