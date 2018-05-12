export class User {
    Username: string;
    Password: string;
}

export class CreatedUsers {

}

export class Workout {
    WorkoutType: string;
    WorkoutDuration: number;
    WorkoutDate: Date;
    NumberOfReps: number;
    NumberOfSets: number;

    constructor(type: string, dura: number, date: Date, numReps: number, numSets: number) {
        this.WorkoutType = type;
        this.WorkoutDuration = dura;
        this.WorkoutDate = date;
        this.NumberOfReps = numReps;
        this.NumberOfSets = numSets;
    }
}