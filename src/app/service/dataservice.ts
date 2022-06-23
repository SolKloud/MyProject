

export class DataService{

    constructor(){}
     task=[
        {
            name:'solaris',
            status:'Hr'
        },
        {
            name:'srishti',
            status:'Testing'
        }
    ];
    
         getTask(id:number){     
         return this.task[id]; 
      }
}
