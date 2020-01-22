import {Injectable, Pipe, PipeTransform} from '@angular/core';
/**
 * Created by sneelapala on 9/27/2017.
 */
@Pipe({name:'skillPipe'})
@Injectable()
export class SkillPipe implements PipeTransform {
  transform(item: string, convertTo: string[]): any {
    let skills = [
      {
        "displayName":"HTML",
        "id":1
      },
      {
        "displayName":"CSS",
        "id":2
      },
      {
        "displayName":"JavaScript",
        "id":3
      },
      {
        "displayName":"AngularJs",
        "id":4
      },
      {
        "displayName":"Angular",
        "id":5
      },
      {
        "displayName":"ReactJs",
        "id":6
      },
      {
        "displayName":"Java",
        "id":7
      },
      {
        "displayName":".Net",
        "id":8
      },
      {
        "displayName":"Oracle",
        "id":9
      }
    ];
    
    let csvSkillList = [];
    if(item) {
      for(let i=0;i<item.length; i++) {
        let dispName = skills.filter(function (el) {
          return el.id+"" == item[i];
        });
        csvSkillList.push(dispName[0].displayName);
      }
      
    }
    return csvSkillList;
  }
}


