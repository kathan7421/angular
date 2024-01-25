import { Component } from '@angular/core';

@Component ({

    selector: 'app-warning-alert',
    templateUrl: `./warning-alert.component.html`,
    styles: [`
     p{
        text-align:center;
        color:red;
        background:#000;
     }
     .white-text
{
    color : #000;
}

    `],
})

export class  WarningAlertComponent {
    showSecret =  false;  
    serverId = 10;
    serverStatus = 'ofline';
    allowNewServer = false;
    counter = 0;
    name = 'vedant darji';
    serverCreationStatus = 'server not created';
    serverName = 'test';
    serverCreated = false;
    servers = ['Testserver','Testserver 2'];
    log = [];
    // getServerStatus() {
    //     return this.serverStatus;
    //   }
    constructor(){
        setTimeout(() => {
    this.allowNewServer = true;
        },5000);

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'ofline';
       
        // this.serverStatus === 'ofline' ? 'Online' : 'Offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    increment(){
        this.counter ++;
    }
    decrement(){
        if(this.counter > 0){
            this.counter --;
        }
    }

    test(){
        return this.serverStatus;
    }
    ngOnInit(){
        this.servers = ['Testserver', 'Testserver 2'];
    }
    onCreatedServer(){
        this.serverCreated = true;
        this.servers.push(this.serverName);
          this.serverCreationStatus = 'Server was created !' + this.serverName;
    }
   
    onUpdateServerName(event:Event){
        console.log(event);
        this.serverName = (<HTMLInputElement>event.target).value;

    }
    getColor(){
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
    onToggleDisplay(){
        this.showSecret = !this.showSecret;
        // this.log.push(this.log.length +1);
        this.log.push(new Date());
    }
}