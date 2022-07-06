import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addstar';
  getAllDayddat:any = {
    'sunday':{
      'checked':0,
      'data':[]
    },
    'monday':{
      'checked':0,
      'data':[]
    },
    'tuesday':{
      'checked':0,
      'data':[]
    },
    'wednesday':{
      'checked':0,
      'data':[]
    },
    'thursday':{
      'checked':0,
      'data':[]
    },
    'friday':{
      'checked':0,
      'data':[]
    },
    'saturday':{
      'checked':0,
      'data':[]
    }
  }

  updatedMonth(data:string){
    console.log(this.getAllDayddat[data]);
    
    if(!this.getAllDayddat[data]['checked']){
      this.getAllDayddat[data]['checked'] = 1 ;
      this.getAllDayddat[data]['data'].push({
        'inTime':'',
        'outTime':''
      })
    }else{
      this.getAllDayddat[data]['data'].length = 0
      this.getAllDayddat[data]['checked'] = 0 ;
    }
    
    console.log(this.getAllDayddat[data]);
    
  }
  addTimeInSunday(){
    console.log("jadbjda");
    
    this.getAllDayddat['sunday']['data'].push({
      'inTime':'',
      'outTime':''
    })
    console.log(this.getAllDayddat['sunday']['data']);
    
  }

  addTimeInDays(day:any){
    console.log("jadbjda");
    
    this.getAllDayddat[day]['data'].push({
      'inTime':'',
      'outTime':''
    })
    console.log("Day is ",day,"  ",this.getAllDayddat[day]['data']);
    
  }

  updateInTimeChange(data:any, value1:any,day:any){
    this.getAllDayddat[day]['data'][parseInt(data)]['inTime'] = value1.target.value;
    console.log("INTIME ",this.getAllDayddat[day]['data']);
    
  }

  updateOutTimeChange(data:any, value1:any,day:any){
    this.getAllDayddat[day]['data'][parseInt(data)]['outTime'] = value1.target.value;
    console.log("OUTTIME ",this.getAllDayddat[day]['data']);
 }

  deleteTimeFromdays(data:any,day:any){
    if(parseInt(data)+1 == this.getAllDayddat[day]['data'].length && this.getAllDayddat[day]['data'].length != 1){
      this.getAllDayddat[day]['data'].pop()
    }
    console.log(this.getAllDayddat);
    
  }
  selectForAllDays(){
    this.getAllDayddat['monday']['data'] = this.getAllDayddat['sunday']['data'].slice()
    this.getAllDayddat['tuesday']['data'] = this.getAllDayddat['sunday']['data'].slice()
    this.getAllDayddat['wednesday']['data'] = this.getAllDayddat['sunday']['data'].slice()
    this.getAllDayddat['thursday']['data'] = this.getAllDayddat['sunday']['data'].slice()
    this.getAllDayddat['friday']['data'] = this.getAllDayddat['sunday']['data'].slice()
    this.getAllDayddat['saturday']['data'] = this.getAllDayddat['sunday']['data'].slice()
    console.log(this.getAllDayddat);
    
  }
}
