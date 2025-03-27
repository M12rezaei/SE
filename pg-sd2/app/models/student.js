// Get the functions in the db.js file to use
const db= require ('./../services/db');

class Student {
    // Student id
    id;
    // Student name
    name;
    // Student programme
    programme;
    // Student modules
    modules = [];
    // Student note
    note;

    constructor(id) {
        this.id = id;
    }
/*
    async getStudentName() {
        if (typeof this.name !== 'string') {
            var sql = "Select * from Students where id =?"
            const results = await db.query(sql, [this.id]);
            this.name = results[0].name;
        }
    }
    */
    async getStudentDetails() {
        if (typeof this.name !== 'string') {
            var sql = "Select * From Students where id = ?"
            const results = await db.query(sql, [this.id]);
            this.name = results[0].name;
            this.note = results[0].note;
        }

    }
    async getStudentProgramme(){

    }
    async getStudentModules() {

    }
    async addStudentNote(note) {
        var sql = "UPDATE Students SET note = ? WHERE Students.id = ?"
        const result = await db.query(sql, [note, this.id]);
        //Ensure the note property in the model is up to date
        this.note = note;
        return result; 

    }
    async deleteStudentProgramme(programme) {
        var sql = "DELETE FROM Student-Programme WHERE id =?";
        const result = await db.query(sql, [this.id]);
        this.programme = '';
        return result;
    }

    async addStudentProgramme(programme) {
        var sql = "INSERT INTO Student_Programme (id, programme) values (?, ?)";
        const result = await db.query(sql, [this.id, programme]);
        this.programme = programme;
        return result;
    }

    async updateStudentProgramme(programme) {
        const existing = await this.getStudentProgramme();
        if (this.programme) {
            await this.deleteStudentProgramme(programme);
        }
        await this.addStudentProgramme(programme);
    }
}

module.exports = {
    Student

}