export class User {
    Username: string;
    Password: string;
}

export class Profile {
    user: User;
    FullName: string;
    Birthdate: Date;
    Email: string;
    FavWorkout: string;
    Gender: string;
    Address: string;

    constructor(name: string, DOB: Date, email: string, fav: string, gend: string, addr: string) {
        this.FullName = name;
        this.Birthdate = DOB;
        this.Email = email;
        this.FavWorkout = fav;
        this.Gender = gend;
        this.Address = addr;
    }
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