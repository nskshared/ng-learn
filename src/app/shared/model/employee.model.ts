import {Skill} from '../type/skill.type';
import {Employee} from '../type/employee.type';

export class EmployeeImpl implements Employee {
  empId: number;
  jobTitleName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  skills: Skill[];
  
  constructor() {
  
  }
}
