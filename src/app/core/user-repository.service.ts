import { Injectable } from '@angular/core';
import { Observable, Subject, EMPTY, throwError } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { IUser } from '../users/user.model';

@Injectable()
export class UserRepositoryService {
  currentUser: any;

  constructor() {}

  saveUser(user: IUser): Observable<any> {
    const classes = user.classes || [];
    //immutability
    this.currentUser = { ...user, classes: [...classes] };

    return EMPTY.pipe(delay(1000));
  }

  enroll(classId: string): Observable<any> {
    if (!this.currentUser)
      return throwError(() => new Error('User not signed in'));

    if (this.currentUser.classes.includes(classId))
      return throwError(() => new Error('Already enrolled'));

    // immutability
    this.currentUser = {
      ...this.currentUser,
      classes: this.currentUser.classes.concat(classId),
    };

    return EMPTY.pipe(delay(1000));
  }

  drop(classId: string): Observable<any> {
    if (!this.currentUser)
      return throwError(() => new Error('User not signed in'));

    if (!this.currentUser.classes.includes(classId))
      return throwError(() => new Error('Not enrolled'));

    // immutability
    this.currentUser = {
      ...this.currentUser,
      classes: this.currentUser.classes.filter((c: string) => c !== classId),
    };

    return EMPTY.pipe(delay(3000));
  }

  signIn(credentials: any): Observable<any> {
    //Never, ever check credentials in client-side code.
    //This code is only here to supply a fake endpoint for signing in.
    if (
      credentials.email !== 'me@whitebeards.edu' ||
      credentials.password !== 'super-secret'
    )
      return throwError(() => new Error('Invalid login'));

    this.currentUser = {
      userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
      firstName: 'Jim',
      lastName: 'Cooper',
      email: 'me@whitebeards.edu',
      classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a'],
    };

    return EMPTY;
  }
}

const courses = [
  {
    courseNumber: 'PO101',
    courseName: 'Intro to Potions',
    creditHours: 3,
    description: '...',
  },
  {
    courseNumber: 'HIS105',
    courseName: 'Ancient History of Magic',
    creditHours: 4,
    description: '...',
  },
  {
    courseNumber: 'CH101',
    courseName: 'Intro to Charms',
    creditHours: 4,
    description: '...',
  },
  {
    courseNumber: 'CH205',
    courseName: 'Creating Advanced Charms',
    creditHours: 4,
    description: '...',
  },
  {
    courseNumber: 'SP101',
    courseName: 'Intro Spell Casting',
    creditHours: 4,
    description: '...',
  },
  {
    courseNumber: 'SP201',
    courseName: 'Advanced Spell Casting',
    creditHours: 4,
    description: '...',
  },
];

const users = [
  {
    userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
    firstName: 'Jim',
    lastName: 'Cooper',
    email: 'someones-email@gmail.com',
    password: 'supersecret',
    classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a'],
  },
];
