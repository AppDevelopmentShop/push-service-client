## Install
``` npm i --save @appdevshop/push-service-client ```
## Usage
``` import pushService from '@appdevshop/push-service-client' ```  
Import package  
``` pushService.initialize({ host: 'localhost', port: 1343 }) ```  
Initialize client with information about where push-service is running.  
After that you can use your pushService everywhere.  
#### Available commands:
``` pushService.register(userToken, firebaseToken) ```  
``` pushService.unregister(userToken, firebaseToken) ```  
``` pushService.send(userToken, {
        title: 'push title',
        body: 'push text',
        payload: {
            field: "all addditional info"
        }
    
    })
``` 
Or you can create multiple clients for each service:  

``` const client1 = pushService.createClient({ host: 'localhost', port: 8081 }) ```  
``` const client2 = pushService.createClient({ host: 'localhost', port: 8082 }) ```  
