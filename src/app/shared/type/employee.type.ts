import {Skill} from './skill.type';

export interface Employee {
  empId: number;
  jobTitleName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  skills: Skill[];
}
