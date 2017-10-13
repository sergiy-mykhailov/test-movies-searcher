
import mongoose from 'mongoose';
import config from '../config/index';

// const Note = mongoose.model('Note');

mongoose.Promise = global.Promise;

export function connect() {
    mongoose.connect(
        `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
        {
            useMongoClient: true,
            /* other options */
        }
    );

    return mongoose.connection;
}

export function listNotes() {
    // return Note.find();
}

export function createNote(data) {
    // const note = new Note({
    //     title:      data.title,
    //     text:       data.text,
    //     color:      data.color,
    //     createdAt:  new Date()
    // });
    // return note.save();
}

export function deleteNote(id) {
    // return Note.findById(id).remove();
}
