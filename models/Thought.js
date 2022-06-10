const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const helpers = require('../utils/helpers');


const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
            
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return helpers.format_dateTime(date);           
            }
        },

        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;